// File: components/Footer.jsx
import React from 'react';
import styles from '../styles/modules/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Disaster Relief Fund. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#impact">Impact</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
