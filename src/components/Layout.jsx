import { Container } from '@mui/material';
import React from 'react';
import MenuAppBar from './MenuAppBar';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from 'redux/auth/auth.selectors';
import Loader from './Loader/Loader';

const Layout = ({ children }) => {
  const isLoading = useSelector(selectAuthIsLoading);
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
          {isLoading ? <Loader /> : children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
