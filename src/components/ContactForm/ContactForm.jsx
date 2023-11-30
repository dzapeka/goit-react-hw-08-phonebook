import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { addContactThunk } from 'redux/contacts/contacts.operations';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/contacts.selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

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
    const stateFunctions = {
      name: setName,
      number: setNumber,
    };

    stateFunctions[name]?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor={nameInputId}>
        <p className={styles.labelText}>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          autoComplete="off"
          required
          pattern="^[a-zA-Zа-яА-ЯїіІ'Ї\s]+$"
        />
      </label>
      <label htmlFor={phoneInputId}>
        <p className={styles.labelText}>Phone</p>
        <input
          className="phoneNumberInput"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={phoneInputId}
          autoComplete="off"
          required
          maxLength="12"
          minLength="3"
        />
      </label>
      <button type="submit" className={styles.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};
