import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contacts.operations';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { Box, Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const isExists = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isExists) {
      Notify.info(`${formData.name} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk(formData));
    setFormData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    let sanitizedValue = value;
    if (name === 'number') {
      sanitizedValue = value.replace(/[^0-9-]/g, '');
    }

    setFormData(prevData => ({ ...prevData, [name]: sanitizedValue }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name-input"
          label="Name"
          size="small"
          autoComplete="off"
          inputProps={{
            pattern: "^[a-zA-Zа-яА-ЯїіІ'Ї\\s]+$",
            maxLength: 30,
            minLength: 3,
            required: true,
          }}
        />
        <TextField
          name="number"
          value={formData.number}
          onChange={handleChange}
          id="number-input"
          label="Number"
          size="small"
          autoComplete="off"
          maxLength="12"
          minLength="3"
          inputProps={{
            maxLength: 15,
            minLength: 3,
            required: true,
          }}
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Box>
    </form>
  );
};
