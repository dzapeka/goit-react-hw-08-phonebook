import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/contacts.selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
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
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading ? <Loader /> : <ContactList />}
      </div>
    </>
  );
};

export default ContactsPage;
