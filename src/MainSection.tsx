import React from 'react';
import LargeButton from './LargeButton';

const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <LargeButton title="SOTeaching" description="Description 1" />
      <LargeButton title="Switch Team" description="Description 2" />
      <LargeButton title="Create Team" description="Description 3" />
    </div>
  );
};

export default MainSection;
