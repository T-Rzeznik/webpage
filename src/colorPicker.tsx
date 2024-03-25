/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { FormControl, Typography, Popover, Paper, Box, Slider } from '@mui/material';


const colorOptions = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#800080', // Purple
];

interface CustomColorProps {
  onClick: () => void;
}

const CustomColor: React.FC<CustomColorProps> = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '8px' }} onClick={onClick}>
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid black', marginRight: '8px' }} />
      <Typography variant="body1">Custom Color</Typography>
    </div>
  );
};

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(100);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setAnchorEl(null);
  };

  const handleOpacityChange = (event: Event, newValue: number | number[]) => {
    setOpacity(newValue as number);
  };

  const openPopover = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-picker-popover' : undefined;

  return (
    <div style={{ border: '1px solid black', padding: '8px', display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div onClick={openPopover} role="button" tabIndex={0} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: color, border: '1px solid black', marginRight: '8px' }} />
          <Typography variant="body1">Color</Typography>
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
          <Box sx={{ display: 'flex' }}>
            {colorOptions.map((option, index) => (
              <div
                key={index}
                style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: option, margin: '4px', cursor: 'pointer' }}
                onClick={() => handleColorChange(option)}
              />
            ))}
          </Box>
          <CustomColor onClick={() => handleColorChange('')} />
          <Typography variant="h6" style={{ marginTop: '8px' }}>Opacity</Typography>
          <Slider
            value={opacity}
            onChange={handleOpacityChange}
            aria-label="Opacity"
            valueLabelDisplay="auto"
            min={0}
            max={100}
          />
        </Paper>
      </Popover>
    </div>
  );
};

export default ColorPicker;

