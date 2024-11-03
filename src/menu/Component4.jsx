import React from 'react';
import { Box, TextField } from '@mui/material';

const Component4 = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <TextField variant="outlined" placeholder="Search..." sx={{ width: '50%' }} />
    </Box>
  );
};

export default Component4;
