import React from 'react';
import './LargeRectangle.css';

interface LargeRectangleProps {
  title: string;
  description: string;
}

const LargeRectangle: React.FC<LargeRectangleProps> = ({ title, description }) => {
  return (
    <div className="large-rectangle">
      <div className="top" />
      <div className="bottom">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default LargeRectangle;
