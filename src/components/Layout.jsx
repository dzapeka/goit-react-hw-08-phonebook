import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/auth.operations';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/auth.selectors';

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
        <div>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn ? (
            <NavLink to="/contacts">Contacts</NavLink>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
        {isLoggedIn && (
          <>
            <div>{userData.name}</div>
            <button onClick={handleLogout}>Log Out</button>
          </>
        )}
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
