import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contacts.operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    isContactCreating: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = {
          ...state.contacts,
          isLoading: false,
          items: payload,
        };
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = {
          ...state.contacts,
          isLoading: false,
          isContactCreating: false,
          items: [...state.contacts.items, payload],
        };
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = {
          ...state.contacts,
          isLoading: false,
          items: state.contacts.items.filter(
            contact => contact.id !== payload.id
          ),
        };
      })
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactThunk.pending, state => {
        state.contacts.isContactCreating = true;
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.contacts = {
            ...state.contacts,
            isLoading: false,
            isContactCreating: false,
            error: payload,
          };
        }
      ),
});
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
