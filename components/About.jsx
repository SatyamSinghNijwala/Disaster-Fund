// File: components/About.jsx
import React from 'react';
import styles from '../styles/modules/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <h2>About Us</h2>
        <p>
          We are a non-profit organization committed to supporting communities affected by natural
          disasters. Our mission is to provide immediate relief, long-term support, and rebuild
          lives through collective effort and global compassion.
        </p>
      </div>
    </section>
  );
};

export default About;
