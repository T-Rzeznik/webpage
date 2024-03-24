/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './TopBar.css'; // Import the CSS file

const TopBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="top-bar">
      <div className="dropdown" onClick={toggleDropdown}>
        <button className="dropdown-button">SoTeaching ▼</button>
        <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
          <a href="#">SOteaching</a>
          <a href="#">Switch Team</a>
          <a href="#">Create Team</a>
        </div>
      </div>
      <div className="search-profile">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="profile-avatar">Profile</div>
      </div>
    </div>
  );
};

export default TopBar;
export default TopBar;
