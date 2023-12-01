import { Box, Button, Container, TextField } from '@mui/material';
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

    // form.reset();
  };

  return (
    <Container>
      <Box
        sx={{
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <TextField
              name="email"
              id="email-input"
              label="Email"
              type="email"
              size="small"
              required
            />
            <TextField
              name="password"
              id="password-input"
              label="Password"
              type="password"
              size="small"
              required
            />
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
