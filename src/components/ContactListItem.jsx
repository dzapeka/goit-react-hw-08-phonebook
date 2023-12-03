import { useDispatch, useSelector } from 'react-redux';

import { deleteContactThunk } from 'redux/contacts/contacts.operations';
import { Grid, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectContactsIsContactDeleting } from 'redux/contacts/contacts.selectors';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isContactDeleting = useSelector(selectContactsIsContactDeleting);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleDeleteContact = async () => {
    try {
      setIsDeleteLoading(true);
      await dispatch(deleteContactThunk(id));
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <ListItem>
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
      <LoadingButton
        variant="text"
        size="snall"
        loading={isDeleteLoading}
        disabled={isContactDeleting}
        aria-label="delete contact"
        onClick={handleDeleteContact}
      >
        <DeleteIcon />
      </LoadingButton>
    </ListItem>
  );
};
