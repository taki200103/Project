import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Add, Remove, DragIndicator } from '@mui/icons-material';

const Component5 = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
      <IconButton>
        <Add />
      </IconButton>
      <IconButton>
        <Remove />
      </IconButton>
      <IconButton>
        <DragIndicator />
      </IconButton>
    </Box>
  );
};

export default Component5;
