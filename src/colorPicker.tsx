import React, { useState } from 'react';
import { MenuItem, Select, Slider, InputLabel, FormControl, Box } from '@mui/material';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(100);

  const handleColorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColor(event.target.value as string);
  };

  const handleOpacityChange = (event: Event, newValue: number | number[]) => {
    setOpacity(newValue as number);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="color-label">Color</InputLabel>
        <Select
          labelId="color-label"
          id="color-select"
          value={color}
          onChange={handleColorChange}
          label="Color"
        >
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          {/* Add other color options */}
        </Select>
      </FormControl>
      <Box sx={{ width: 200 }}>
        <FormControl>
          <InputLabel id="opacity-slider">Opacity</InputLabel>
          <Slider
            aria-label="Opacity"
            defaultValue={100}
            valueLabelDisplay="auto"
            onChange={handleOpacityChange}
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default ColorPicker;
