import React from 'react';
import ButtonDropdownMenu from './ButtonDropdownMenu';
import SearchBar from './SearchBar';
import ProfileAvatar from './ProfileAvatar';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <ButtonDropdownMenu />
      <SearchBar />
      <ProfileAvatar />
    </div>
  );
};

export default TopBar;
