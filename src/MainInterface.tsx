/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MainInterface.css'; // Import CSS for MainInterface
import TopBar from './TopBar'; // Import TopBar component
import LargeRectangle from './LargeRectangle'; // Import LargeRectangle component

const MainInterface: React.FC = () => {
  return (
    <div className="main-interface">
      {/* Render TopBar component */}
      <TopBar />

      {/* Render Allboards H1 aligned right */}
      <h1 className="all-boards">Allboards</h1>

      {/* Parent container for LargeRectangle components */}
      <div className="rectangle-container">
        {/* Render multiple LargeRectangle components */}
        <LargeRectangle title="Board 1" description="Description 1" />
        <LargeRectangle title="Board 2" description="Description 2" />
        <LargeRectangle title="Board 3" description="Description 3" />
        <LargeRectangle title="Board 4" description="Description 4" />
        <LargeRectangle title="Board 5" description="Description 5" />
        <LargeRectangle title="Board 6" description="Description 6" />
        <LargeRectangle title="Board 7" description="Description 7" />
        <LargeRectangle title="Board 8" description="Description 8" />
        <LargeRectangle title="Board 9" description="Description 9" />
        {/* Add more LargeRectangle components as needed */}
      </div>
    </div>
  );
};

export default MainInterface;
