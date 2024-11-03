import React from 'react';
import { Box } from '@mui/material';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';

const MenuLayout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', p: 2 }}>
      {/* Component 1 */}
      <Component1 />

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Component 2 - Lịch */}
        <Component2 />

        {/* Component 4 - Thanh tìm kiếm */}
        <Component4 />

        {/* Component 5 - Thêm/Xóa và Lưới các ô */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
          <Component5 />
          <Component3 />
        </Box>
      </Box>
    </Box>
  );
};

export default MenuLayout;
