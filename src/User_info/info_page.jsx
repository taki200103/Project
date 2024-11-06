import React from 'react';
import { Typography, Container, Box, Paper, Avatar, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function UserInfoPage() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Đặt chiều cao full màn hình để khung nằm giữa
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          padding: 4,
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <Avatar
          sx={{
            width: 60,
            height: 60,
            margin: 'auto',
            marginBottom: 2,
            backgroundColor: '#3f51b5',
          }}
        >
          <PersonIcon fontSize="large" />
        </Avatar>
        
        <Typography variant="h6" gutterBottom>
          Thông Tin Người Dùng
        </Typography>
        
        <Divider sx={{ marginY: 2 }} />
        
        <Box sx={{ textAlign: 'left', paddingX: 2 }}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>ID:</strong> 12345
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Email:</strong> user@example.com
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Tên Người Dùng:</strong> Nguyễn Hoàng
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Mật Khẩu:</strong> ********
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default UserInfoPage;
