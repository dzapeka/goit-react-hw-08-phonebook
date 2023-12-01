import { useDispatch } from 'react-redux';

import { deleteContactThunk } from 'redux/contacts/contacts.operations';
import { IconButton, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleDeleteContact}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Typography variant="body1">
        {name}: {number}
      </Typography>
    </ListItem>
  );
};
