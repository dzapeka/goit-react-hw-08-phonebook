import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { List } from '@mui/material';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List dense={true}>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
