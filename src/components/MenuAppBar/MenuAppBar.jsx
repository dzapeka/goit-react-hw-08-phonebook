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
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/auth.selectors';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/auth.operations';
import { NavLinkStyled } from './MenuAppBar.styled';

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
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <ContactPhoneIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PHONEBOOK
          </Typography>
          <Button
            to="/"
            component={NavLink}
            sx={{ color: 'inherit', display: 'block' }}
          >
            Home
          </Button>

          {isLoggedIn && (
            <Button
              to="/contacts"
              component={NavLink}
              sx={{ color: 'inherit', display: 'block' }}
            >
              Contacts
            </Button>
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
              <Button
                to="/register"
                component={NavLink}
                sx={{ color: 'inherit', display: 'block' }}
              >
                Register
              </Button>
              <Button
                to="/login"
                component={NavLink}
                sx={{ color: 'inherit', display: 'block' }}
              >
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
