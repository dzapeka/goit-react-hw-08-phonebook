import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/auth.operations';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/auth.selectors';
import MenuAppBar from './MenuAppBar';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logOutThunk());
  };
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
