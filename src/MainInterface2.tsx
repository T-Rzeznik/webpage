/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Box, Grid, Paper, Menu, MenuItem, ButtonBase } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';

interface Board {
  title: string;
  description: string;
}

const MainInterface2: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [boards, setBoards] = useState<Board[]>([]);
  const componentHeight = 600; // Adjust the height as needed

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderBoards = () => {
    return boards.map((board, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <ButtonBase component={Paper} sx={{ p: 3, border: 1, borderColor: 'grey.700', borderRadius: 1, height: '170px', width: '90%', position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', width: '100%', height: '70%', bgcolor: 'white', top: 0, left: 0 }} />
          <Box sx={{ position: 'absolute', width: '100%', height: '30%', bgcolor: 'grey.700', bottom: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ mb: 1, color: 'white', textAlign: 'left', paddingLeft: '8px' }}>{board.title}</Typography>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'left', paddingLeft: '8px' }}>{board.description}</Typography>
          </Box>
        </ButtonBase>
      </Grid>
    ));
  };

  const handleClick = () => {
    const newBoard: Board = {
      title: `Title ${boards.length + 1}`,
      description: `Description ${boards.length + 1}`
    };
    setBoards([...boards, newBoard]);
  };

  return (
    <Box sx={{ flexGrow: 1, border: 1, borderColor: 'grey.500', borderRadius: 1, width: '80vw', height: componentHeight, maxHeight: '80vh', overflow: 'auto' }}>
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
          <IconButton
            size="large"
            aria-label="add board"
            color="inherit"
            onClick={handleClick}
          >
            <AddIcon />
          </IconButton>
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
