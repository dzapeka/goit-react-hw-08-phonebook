import { Container, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Your Phonebook</title>
      </Helmet>
      <Container
        sx={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" marginBottom={3}>
          Welcome to Your Phonebook
        </Typography>
        <Typography variant="subtitle1" component="p">
          Keep all your contacts in one place. Never lose a number again!
        </Typography>
      </Container>
    </>
  );
};

export default HomePage;
