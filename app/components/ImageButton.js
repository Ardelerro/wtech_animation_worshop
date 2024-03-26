import React, { useState } from 'react';
import '../styles/ImageButton.css';

const ImageButton = ({ imageUrl, description, easing, animationTime }) => {
  const [randomNum] = useState(Math.random());
  const uniqueUrl = `${imageUrl}?${randomNum}`;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    backgroundImage: `url(${uniqueUrl})`,
  };

  const descriptionStyle = {
    transform: isHovered ? 'translateX(0)' : '',
    transition: `transform ${animationTime || '1s'}s ${easing || 'ease-in-out'}`,
  };

  return (
    <div className="image-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="image-container" style={imageStyle}></div>
      <div className={`description ${isHovered ? 'show' : ''}`} style={descriptionStyle}>
        <p>{description}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default ImageButton;
