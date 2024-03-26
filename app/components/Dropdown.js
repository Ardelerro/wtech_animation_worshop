// Dropdown.js

import React, { useState } from 'react';
import '../styles/Dropdown.css';

const Dropdown = ({ options, onClick, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#007bff');

  const colors = ['#ff007b', '#7bff00', '#007bff']
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClickExists = (option) => {
    onClick(option);
    setSelectedOption(option);
    toggleDropdown();
  };

  const handleOptionClick = !!onClick
    ? (option) => onClickExists(option)
    : (option) => {
        setSelectedOption(option);
        toggleDropdown();
        setBackgroundColor(colors[options.indexOf(option)]);
        console.log(colors[options.indexOf(option)]);
      };

  const dropdownMenuStyle = {
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
  };

  return (
    <div className="dropdown" >
      <button className="dropdown-toggle" style={{background:backgroundColor}} onClick={toggleDropdown}>
        {selectedOption || type || 'Select an option'}
        <i className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </button>
      <ul className="dropdown-menu" style={dropdownMenuStyle}>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
