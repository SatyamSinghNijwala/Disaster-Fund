// File: components/Hero.jsx
import React from 'react';
import styles from '../styles/modules/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Support Disaster Relief</h1>
        <p className={styles.heroSubtitle}>
          Join hands to help those affected by natural calamities.
        </p>
        <div className={styles.heroActions}>
          <button className="thq-button-filled">Contribute</button>
          <button className="thq-button-outline">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
