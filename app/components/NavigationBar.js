import React, { useState, useEffect } from 'react';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = () => {
  const [title, setTitle] = useState('');
  const titleText = "Marzouq";

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let interval;
    let typingSpeed = 100;

    const typeTitle = () => {
      setTitle(prevTitle => {
        if (isDeleting) {
          return prevTitle.substring(0, currentIndex);
        } else {
          return titleText.substring(0, currentIndex);
        }
      });

      if (!isDeleting && currentIndex === titleText.length) {
        isDeleting = true;
        typingSpeed = 20; // Decrease speed when deleting
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        typingSpeed = 100; // Reset speed when starting to type again
      }

      currentIndex = isDeleting ? currentIndex - 1 : currentIndex + 1;
    };

    interval = setInterval(typeTitle, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>{title}</h1>
      {}
    </nav>
  );
};

export default NavigationBar;
