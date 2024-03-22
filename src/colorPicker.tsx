import React, { useState } from 'react';
import { MenuItem, Select, Slider, InputLabel, FormControl, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('');

  const handleColorChange = (event: SelectChangeEvent<string>) => {
    setColor(event.target.value);
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
    </div>
  );
};

export default ColorPicker;
