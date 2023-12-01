import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contacts.operations';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { Box, Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const isExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExists) {
      Notify.info(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    let sanitizedValue = value;
    if (name === 'number') {
      sanitizedValue = value.replace(/[^0-9-]/g, '');
    }

    const stateFunctions = {
      name: setName,
      number: setNumber,
    };

    stateFunctions[name]?.(sanitizedValue);
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
          value={name}
          onChange={handleChange}
          id="name-input"
          label="Name"
          size="small"
          autoComplete="off"
          inputProps={{
            pattern: "^[a-zA-Zа-яА-ЯїіІ'Ї\\s]+$",
            maxLength: 20,
            minLength: 3,
          }}
          required
        />
        <TextField
          name="number"
          value={number}
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
          }}
          required
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Box>
    </form>
  );
};
