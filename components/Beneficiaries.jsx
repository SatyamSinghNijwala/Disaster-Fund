// File: components/Beneficiaries.jsx
'use client';
import React from 'react';
import styles from '../styles/modules/Beneficiaries.module.css';

const beneficiaries = [
  {
    id: 1,
    name: 'Sunita Devi',
    location: 'Bihar',
    story: 'Received shelter and food after the devastating floods.',
    image: '/beneficiary1.jpg',
  },
  {
    id: 2,
    name: 'Rahul Meena',
    location: 'Rajasthan',
    story: 'Got medical help and essentials during desert storms.',
    image: '/beneficiary2.jpg',
  },
  {
    id: 3,
    name: 'Ayesha Khan',
    location: 'Assam',
    story: 'Rebuilt her home with help after heavy floods.',
    image: '/beneficiary3.jpg',
  },
];

const Beneficiaries = () => {
  return (
    <section id="Beneficiaries" className={styles.section}>
      <h2 className={styles.title}>Lives You've Touched</h2>
      <div className={styles.grid}>
        {beneficiaries.map((b) => (
          <div key={b.id} className={styles.card}>
            <img
              src={b.image}
              alt={`Photo of ${b.name}`}
              className={styles.image}
            />
            <h3 className={styles.name}>
              {b.name} <span className={styles.location}>({b.location})</span>
            </h3>
            <p className={styles.story}>{b.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficiaries;
