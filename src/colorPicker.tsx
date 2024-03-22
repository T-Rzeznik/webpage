/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Slider, InputLabel, FormControl, Box } from '@mui/material';
import { SelectChangeEvent, MenuItem, Popover, Paper, Typography } from '@mui/material';

// Define your color options
const colorOptions = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  // Add more color options as needed
];

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setAnchorEl(null);
  };

  const openPopover = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-picker-popover' : undefined;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      openPopover(event as any); // Type assertion for compatibility
    }
  };

  return (
    <div style={{ border: '1px solid black', padding: '8px', display: 'flex', alignItems: 'center' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="color-label">Color</InputLabel>
        <div onClick={openPopover} role="button" tabIndex={0} onKeyDown={handleKeyDown} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: color, border: '1px solid black', marginRight: '8px' }} />
          <span>{color}</span>
        </div>
      </FormControl>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Select a Color</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {colorOptions.map((option, index) => (
              <div
                key={index}
                style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: option, margin: '4px', cursor: 'pointer' }}
                onClick={() => handleColorChange(option)}
                role="button"
                tabIndex={0}
                onKeyDown={() => handleColorChange(option)}
              />
            ))}
          </Box>
        </Paper>
      </Popover>
    </div>
  );
};

export default ColorPicker;
