import React from 'react';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="dropdown">
        <button className="dropdown-button">SoTeaching ▼</button>
        <div className="dropdown-content">
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
