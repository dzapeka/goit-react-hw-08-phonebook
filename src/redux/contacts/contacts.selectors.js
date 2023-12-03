import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsStore.contacts.items;
export const selectContactsError = state => state.contactsStore.contacts.error;
export const selectContactsIsLoading = state =>
  state.contactsStore.contacts.isLoading;
export const selectContactsIsContactCreating = state =>
  state.contactsStore.contacts.isContactCreating;
export const selectContactsIsContactDeleting = state =>
  state.contactsStore.contacts.isContactDeleting;
export const selectContactsFilter = state => state.contactsStore.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
