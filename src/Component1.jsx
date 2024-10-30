import React from 'react';
import { Box } from '@mui/material';

const Component1 = () => {
  return (
    <Box sx={{ width: '15%', bgcolor: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#bbb', mb: 2 }}></Box>
      <Box sx={{ width: '80%', bgcolor: '#e0e0e0', height: '50%', mt: 2, p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {[1, 2, 3].map((item) => (
          <Box key={item} sx={{ width: '100%', height: 50, bgcolor: '#ddd', borderRadius: 1 }}></Box>
        ))}
      </Box>
    </Box>
  );
};

export default Component1;
