import React from 'react';

interface LargeButtonProps {
  title: string;
  description: string;
}

const LargeButton: React.FC<LargeButtonProps> = ({ title, description }) => {
  return (
    <div className="large-button">
      <div className="button-face" style={{ height: '70%', backgroundColor: 'white' }}></div>
      <div className="button-content" style={{ height: '30%', backgroundColor: 'black', color: 'white', padding: '5px' }}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default LargeButton;
