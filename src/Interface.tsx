// LargeRectangle.tsx
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

// TopBar.tsx
import React, { useState } from 'react';
import { NavBar, Dropdown, Input, Avatar } from 'joy-ui';

const TopBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <NavBar>
      <div className="left-section">
        <Dropdown
          trigger={<button className="dropdown-button">SoTeaching ▼</button>}
          visible={isDropdownOpen}
          onVisibleChange={toggleDropdown}
        >
          <Dropdown.Item>SOteaching</Dropdown.Item>
          <Dropdown.Item>Switch Team</Dropdown.Item>
          <Dropdown.Item>Create Team</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="right-section">
        <div className="search-profile">
          <Input placeholder="Search..." className="search-bar" />
          <Avatar>Profile</Avatar>
        </div>
      </div>
    </NavBar>
  );
};

export default TopBar;

// MainInterface.tsx
import React from 'react';
import { PageContainer } from 'joy-ui';
import TopBar from './TopBar';
import LargeRectangle from './LargeRectangle';

const MainInterface: React.FC = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default MainInterface;
