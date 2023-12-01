import { Box } from '@mui/material';
import React from 'react';

const FormLayoutWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: '300px',
        margin: 'auto',
      }}
    >
      {children}
    </Box>
  );
};

export default FormLayoutWrapper;
