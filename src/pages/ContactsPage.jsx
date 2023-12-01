import { Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import FormLayoutWrapper from 'components/FormLayoutWrapper';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contacts.operations';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/contacts.selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Notify.failure(error);
    }
  }, [error]);

  return (
    <>
      <Helmet>
        <title>Contacts | Phonebook </title>
      </Helmet>
      <Typography variant="h4" textAlign="center" marginBottom={1}>
        Add new contact
      </Typography>
      <FormLayoutWrapper>
        <ContactForm />
      </FormLayoutWrapper>

      <Typography
        variant="h4"
        textAlign="center"
        marginBottom={1}
        marginTop={6}
      >
        Contacts
      </Typography>
      <Filter />
      {isLoading ? <Loader /> : <ContactList />}
    </>
  );
};

export default ContactsPage;
