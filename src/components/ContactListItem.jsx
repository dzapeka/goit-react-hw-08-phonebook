import { useDispatch } from 'react-redux';

import { deleteContactThunk } from 'redux/contacts/contacts.operations';
import { Grid, IconButton, ListItem, Typography } from '@mui/material';
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
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ color: '#666' }}>
            {number}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};
