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
