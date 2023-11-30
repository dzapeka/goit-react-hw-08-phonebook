import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'redux/auth/auth.operations';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axiosInstance.get('/contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (contact, thunkApi) => {
    try {
      const { data } = await axiosInstance.post('/contacts', contact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axiosInstance.delete(`/contacts/${contactId}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
