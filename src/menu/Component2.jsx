import React from 'react';
import { Box, Typography } from '@mui/material';

const Component2 = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, p: 1 }}>
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
        <Box key={day} sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>{day}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Component2;
