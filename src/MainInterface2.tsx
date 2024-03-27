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

  const renderBoards = () => {
    const boards = [];
    for (let index = 0; index < 9; index++) {
      boards.push(
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper sx={{ p: 2, position: 'relative' }}>
            <Box sx={{ height: '100%', position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'white', opacity: 0.7 }} />
            <Box sx={{ height: '30%', position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'grey.700', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>
              <Typography variant="h6">Board {index + 1}</Typography>
            </Box>
            <Box sx={{ height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>Description {index + 1}</Typography>
            </Box>
          </Paper>
        </Grid>
      );
    }
    return boards;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'grey.700' }}>
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
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
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
