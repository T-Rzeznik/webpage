import React from 'react';
import { LargeRectangle as MuiLargeRectangle } from '@mui/joy';

interface LargeRectangleProps {
  title: string;
  description: string;
}

const LargeRectangle: React.FC<LargeRectangleProps> = ({ title, description }) => {
  return (
    <MuiLargeRectangle title={title} description={description} />
  );
};

export default LargeRectangle;
