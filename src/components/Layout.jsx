import { Container } from '@mui/material';
import React from 'react';
import MenuAppBar from './MenuAppBar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <MenuAppBar />
      </header>

      <main>
        <Container
          sx={{
            marginTop: 5,
            padding: 0,
          }}
        >
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
