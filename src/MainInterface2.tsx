import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Box, Grid, Paper, Menu, MenuItem, ButtonBase } from '@mui/material';
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
          <ButtonBase component={Paper} sx={{ p: 2, border: 1, borderColor: 'grey.700', borderRadius: 1, height: '150px', position: 'relative' }} onClick={() => handleClick(index)}>
            <Box sx={{ position: 'absolute', width: '100%', height: '70%', bgcolor: 'white', top: 0, left: 0 }} />
            <Box sx={{ position: 'absolute', width: '100%', height: '30%', bgcolor: 'grey.700', bottom: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1, color: 'white', textAlign: 'left', paddingLeft: '8px' }}>Board {index + 1}</Typography>
              <Typography variant="body1" sx={{ color: 'white', textAlign: 'left', paddingLeft: '8px' }}>Description {index + 1}</Typography>
            </Box>
          </ButtonBase>
        </Grid>
      );
    }
    return boards;
  };

  const handleClick = (index: number) => {
    console.log(`Clicked on board ${index + 1}`);
    // Add your logic for handling the click event here
  };

  return (
    <Box sx={{ flexGrow: 1, border: 1, borderColor: 'grey.500', borderRadius: 1 }}>
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

