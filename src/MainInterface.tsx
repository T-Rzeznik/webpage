import React from 'react';
import './MainInterface.css';
import TopBar from './TopBar';
import LargeRectangle from './LargeRectangle';

const MainInterface: React.FC = () => {
  return (
    <div className="main-interface">
      <TopBar />
      <div className="rectangle-container">
        <LargeRectangle title="Title 1" description="Description 1" />
        <LargeRectangle title="Title 2" description="Description 2" />
        <LargeRectangle title="Title 3" description="Description 3" />
        <LargeRectangle title="Title 4" description="Description 4" />
        <LargeRectangle title="Title 5" description="Description 5" />
      </div>
    </div>
  );
};

export default MainInterface;
