import React from 'react';
import { MainInterface as MuiMainInterface } from '@mui/joy';
import TopBar from './TopBar';
import LargeRectangle from './LargeRectangle';

const MainInterface2: React.FC = () => {
  return (
    <MuiMainInterface>
      <TopBar />
      <h1 className="all-boards">All Boards</h1>
      <div className="rectangle-container">
        <LargeRectangle title="Board 1" description="Description 1" />
        <LargeRectangle title="Board 2" description="Description 2" />
        <LargeRectangle title="Board 3" description="Description 3" />
        <LargeRectangle title="Board 4" description="Description 4" />
        <LargeRectangle title="Board 5" description="Description 5" />
        <LargeRectangle title="Board 6" description="Description 6" />
        <LargeRectangle title="Board 7" description="Description 7" />
        <LargeRectangle title="Board 8" description="Description 8" />
        <LargeRectangle title="Board 9" description="Description 9" />
      </div>
    </MuiMainInterface>
  );
};

export default MainInterface2;
