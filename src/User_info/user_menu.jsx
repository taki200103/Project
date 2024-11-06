import React, { useState } from 'react';
import { Avatar, Button, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function UserInfoModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigation = (action) => {
    console.log("Navigation to:", action); // Replace with navigation or action logic
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Thông tin người dùng
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: { borderRadius: 4 } // Set border radius here
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Nguyễn Hoàng</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Avatar
            src="" // Replace with user's avatar URL
            alt="User Avatar"
            sx={{ width: 80, height: 80, margin: 'auto', marginBottom: 2 }}
          />
          <Typography variant="subtitle1">To Do List</Typography>
          <List>
            <ListItem button onClick={() => handleNavigation("Thông tin người dùng")}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Thông tin người dùng" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("Đổi tên")}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đổi tên" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("Đổi mật khẩu")}>
              <ListItemAvatar>
                <Avatar>
                  <LockIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đổi mật khẩu" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("Đăng xuất")}>
              <ListItemAvatar>
                <Avatar>
                  <ExitToAppIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đăng xuất" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserInfoModal;
