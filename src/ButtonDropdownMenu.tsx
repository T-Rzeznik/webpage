import React, { useState } from 'react';

const ButtonDropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    // Handle option click here
    console.log(`Option clicked: ${option}`);
    setIsOpen(false); // Close the menu after selecting an option
  };

  return (
    <div className="button-dropdown-menu">
      <button className="dropdown-button" onClick={toggleMenu}>
        SoTeaching <span className="arrow">&#9662;</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-option" onClick={() => handleOptionClick('SOTEACHING')}>SOTEACHING</div>
          <div className="dropdown-option" onClick={() => handleOptionClick('Switch Team')}>Switch Team</div>
          <div className="dropdown-option" onClick={() => handleOptionClick('Create Team')}>Create Team</div>
        </div>
      )}
    </div>
  );
};

export default ButtonDropdownMenu;
