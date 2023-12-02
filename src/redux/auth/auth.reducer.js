import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
} from './auth.operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  userData: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: state => {
      state.error = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = payload;
      })
      .addMatcher(
        isAnyOf(
          logInThunk.pending,
          registerThunk.pending,
          refreshUserThunk.pending,
          logOutThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logInThunk.rejected,
          registerThunk.rejected,
          refreshUserThunk.rejected,
          logOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { clearAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;
