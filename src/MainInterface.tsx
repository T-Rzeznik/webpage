// MainInterface.tsx
import React from 'react';
import TopBar from './TopBar';
import LargeRectangle from './LargeRectangle';

const MainInterface = () => {
  return (
    <div className="main-interface">
      <TopBar />
      <h1 className="main-title">All Boards</h1>
      <div className="rectangle-container">
        <LargeRectangle title="Title 1" description="Description 1" />
        <LargeRectangle title="Title 2" description="Description 2" />
        <LargeRectangle title="Title 3" description="Description 3" />
        <LargeRectangle title="Title 4" description="Description 4" />
        <LargeRectangle title="Title 5" description="Description 5" />
        <LargeRectangle title="Title 6" description="Description 6" />
        <LargeRectangle title="Title 7" description="Description 7" />
        <LargeRectangle title="Title 8" description="Description 8" />
      </div>
    </div>
  );
};

export default MainInterface;
