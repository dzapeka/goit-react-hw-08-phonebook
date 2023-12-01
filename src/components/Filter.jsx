import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contacts.reducer';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <TextField
      type="text"
      name="filter"
      onChange={handleChange}
      label="Find contacts by name"
      id={filterInputId}
      autoComplete="off"
      size="small"
    />
  );
};
