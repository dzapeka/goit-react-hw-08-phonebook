import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/auth.selectors';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/auth.operations';

const MenuAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOutThunk());
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Phonebook
          </Typography>
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active-link"
            exact
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/contacts"
              className="nav-link"
              activeClassName="active-link"
            >
              Contacts
            </NavLink>
          )}
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          {isLoggedIn ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Typography>{userData.name}</Typography>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  onClick={handleMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                className="nav-link"
                activeClassName="active-link"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="active-link"
              >
                Login
              </NavLink>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
