import React, { useState } from 'react';
import { TopBar as MuiTopBar, Dropdown } from '@mui/joy';

const TopBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <MuiTopBar>
      <div className="left-section">
        <Dropdown
          buttonText="SoTeaching ▼"
          isOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
        >
          <a href="#">SOteaching</a>
          <a href="#">Switch Team</a>
          <a href="#">Create Team</a>
        </Dropdown>
      </div>
      <div className="right-section">
        <div className="search-profile">
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="profile-avatar">Profile</div>
        </div>
      </div>
    </MuiTopBar>
  );
};

export default TopBar;
