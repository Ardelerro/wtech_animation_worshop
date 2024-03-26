import React, { useState } from 'react';
import styles from '../styles/ParalaxImageButton.module.css';

const ParallaxImageButton = ({ imageUrl }) => {
    const [randomNum] = useState(Math.random());
    const uniqueUrl = `${imageUrl}?${randomNum}`;

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [parallaxPosition, setParallaxPosition] = useState({ x: 0, y: 0 });
    const [paralaxScale, setScale] = useState({scale: 1});
    const [isOpacityOne, setIsOpacityOne] = useState(false);



    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setParallaxPosition({ x: 0, y: 0 });
        setScale({scale:1})
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
        setIsOpacityOne(!isOpacityOne);
    };

    const handleMouseMove = (e) => {
        if (isHovered) {
            const boundingRect = e.target.getBoundingClientRect();
            const offsetX = e.clientX - boundingRect.left;
            const offsetY = e.clientY - boundingRect.top;
            const centerX = boundingRect.width / 2;
            const centerY = boundingRect.height / 2;
            const distanceX = offsetX - centerX;
            const distanceY = offsetY - centerY;
            const trueDistance = Math.sqrt((distanceX*distanceX)+(distanceY*distanceY))
            const variedScale = 2- (0.004* trueDistance);
            setScale({scale: variedScale})
            setParallaxPosition({ x: (distanceX / 5) * -1, y: (distanceY / 5) * -1 });
        }
    };

    const imageStyle = {
        backgroundImage: `url(${uniqueUrl})`,
        transform: isHovered ? `translate(${parallaxPosition.x}px, ${parallaxPosition.y}px) scale(${paralaxScale.scale})` : '',
    };

    const description = isClicked ? (
        <div className={`${styles.description} ${isOpacityOne ? styles.fadeIn : ''}`}>
          <p>This is the description for the image.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
      ) : null;

    return (
        <div
            className={styles['image-button']}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >      
      <div className={styles['image-container']} style={imageStyle} onMouseMove={handleMouseMove}></div>
            {description}
        </div>
    );
};

export default ParallaxImageButton;
