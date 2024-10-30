import React from 'react';
import { Box, Grid } from '@mui/material';

const Component3 = () => {
  return (
    <Grid container spacing={2} sx={{ flex: 1 }}>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={4} key={index}>
          <Box sx={{ width: '100%', height: 100, bgcolor: '#e0e0e0', borderRadius: 1 }}></Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component3;
