import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Box, Grid, Paper, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';

const MainInterface2: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'grey.200' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            SoTeaching
          </Typography>
          <IconButton
            size="large"
            aria-label="open dropdown"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>SoTeaching</MenuItem>
            <MenuItem onClick={handleMenuClose}>Switch Team</MenuItem>
            <MenuItem onClick={handleMenuClose}>Create Team</MenuItem>
          </Menu>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
              <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Paper>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" sx={{ mt: 2, ml: 2 }}>All Boards</Typography>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {renderBoards()}
      </Grid>
    </Box>
  );
};

export default MainInterface2;

