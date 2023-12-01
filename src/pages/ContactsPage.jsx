import { Box, Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import FormLayoutWrapper from 'components/FormLayoutWrapper';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/contacts.selectors';

const ContactsPage = () => {
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsIsLoading);
  const contacts = useSelector(selectContacts);

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
      <Box
        maxWidth="500px"
        border="1px solid #ccc"
        margin="auto"
        padding="16px"
      >
        {isLoading ? (
          <Loader />
        ) : contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Typography sx={{ textAlign: 'center' }}>
            Your contacts list is empty. Let's add your first one!
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ContactsPage;
