import React from 'react';
import { Rectangle } from 'joy-ui';

interface LargeRectangleProps {
  title: string;
  description: string;
}

const LargeRectangle: React.FC<LargeRectangleProps> = ({ title, description }) => {
  return (
    <Rectangle
      title={title}
      description={description}
      style={{ width: 300, height: 200 }}
    />
  );
};

export default LargeRectangle;
