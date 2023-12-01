import { Box, Container, TextField, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(registerThunk(userData));
    form.reset();
  };

  return (
    <Container>
      <Box
        sx={{
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <TextField
              name="name"
              id="username-input"
              label="Username"
              size="small"
              required
            />
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
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterForm;
