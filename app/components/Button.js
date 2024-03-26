import React, { useState } from 'react';
import styles from '../styles/Button.module.css'; 

const Button = () => {
  const [backgroundColor, setBackgroundColor] = useState('#007bff'); 

  const handleClick = () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  // Function to calculate the luminance of a color
  const calculateLuminance = (color) => {
    const hex = color.substring(1);
    const rgb = parseInt(hex, 16);

    // Calculate luminance using the relative luminance formula
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;

    return 0.2126 * r + 0.7152 * g + 0.0722 * b; // Calculate luminance
  };

  // Determine text color based on background color luminance
  const textColor = calculateLuminance(backgroundColor) > 128 ? '#000' : '#fff';

  return (
    <div className='content'>
    <button className={styles.button} onClick={handleClick} style={{ backgroundColor, color: textColor }}>
      Click me
    </button>
    <button className={styles.button2} onClick={handleClick} style={{ backgroundColor, color: textColor }}>
      Click me
    </button>
    </div>
    
  );
};

export default Button;
