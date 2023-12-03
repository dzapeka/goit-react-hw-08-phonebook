import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contacts.operations';
import { Notify } from 'notiflix';
import {
  selectContacts,
  selectContactsIsContactCreating,
} from 'redux/contacts/contacts.selectors';
import { Box, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const isContactCreating = useSelector(selectContactsIsContactCreating);

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
      sanitizedValue = value.replace(/[^0-9-+]/g, '');
    }

    setFormData(prevData => ({ ...prevData, [name]: sanitizedValue }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name-input"
          label="Name"
          size="small"
          autoComplete="off"
          spellCheck={false}
          inputProps={{
            pattern: "^[0-9a-zA-Zа-яА-ЯїіІ'Ї\\s]+$",
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
        <LoadingButton
          variant="contained"
          loading={isContactCreating}
          type="submit"
        >
          Add contact
        </LoadingButton>
      </Box>
    </form>
  );
};
