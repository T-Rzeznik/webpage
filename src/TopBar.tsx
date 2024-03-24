// TopBar.tsx
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <button className="dropdown-button">Menu ▼</button>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="profile-avatar">Profile</div>
    </div>
  );
};

export default TopBar;
