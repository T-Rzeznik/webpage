import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Box, Grid, Paper } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';

const MainInterface2: React.FC = () => {
  const renderBoards = () => {
    const boards = [];
    for (let index = 0; index < 9; index++) {
      boards.push(
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Board {index + 1}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>Description {index + 1}</Typography>
          </Paper>
        </Grid>
      );
    }
    return boards;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            SoTeaching
          </Typography>
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
      {/* {renderMenu} */}
      <Typography variant="h4" sx={{ mt: 2, ml: 2 }}>All Boards</Typography>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {renderBoards()}
      </Grid>
    </Box>
  );
};

export default MainInterface2;

