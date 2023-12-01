import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { Divider, List } from '@mui/material';
import React from 'react';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List dense={false}>
      {visibleContacts.map((contact, index) => (
        <React.Fragment key={contact.id}>
          <ContactListItem {...contact} />
          {index < visibleContacts.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
