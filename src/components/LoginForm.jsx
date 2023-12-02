import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/auth.operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logInThunk(userData));
  };

  return (
    <>
      <Typography variant="h4" textAlign="center" marginBottom={3}>
        Log In
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <TextField
            name="email"
            id="email-input"
            label="Email"
            type="email"
            size="small"
            autoComplete="email"
            inputProps={{
              required: true,
            }}
          />
          <TextField
            name="password"
            id="password-input"
            label="Password"
            type="password"
            size="small"
            autoComplete="current-password"
            inputProps={{
              required: true,
            }}
          />
          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Box>
      </form>
    </>
  );
};

export default LoginForm;
