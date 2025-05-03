// File: components/Impact.jsx
import React from 'react';
import styles from '../styles/modules/Impact.module.css';

const Impact = () => {
  return (
    <section id="impact" className={styles.impactSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our Impact</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <h3 className={styles.statNumber}>50,000+</h3>
            <p className={styles.statLabel}>People Helped</p>
          </div>
          <div className={styles.statBox}>
            <h3 className={styles.statNumber}>120+</h3>
            <p className={styles.statLabel}>Disasters Responded</p>
          </div>
          <div className={styles.statBox}>
            <h3 className={styles.statNumber}>80+</h3>
            <p className={styles.statLabel}>Cities Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
