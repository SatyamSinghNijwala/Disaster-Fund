// File: components/CampaignCard.jsx
import React from 'react';
import styles from '../styles/modules/CampaignCard.module.css';

const CampaignCard = ({ data = {} }) => {
  const {
    title = 'Untitled Campaign',
    description = 'No description available.',
    targetAmount = 1,
    raisedAmount = 0
  } = data;
  const progress = Math.min((raisedAmount / targetAmount) * 100, 100);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className={styles.amount}>₹{raisedAmount.toLocaleString()} raised of ₹{targetAmount.toLocaleString()}</p>
      </div>

      <button className="thq-button-filled">Donate Now</button>
    </div>
  );
};

export default CampaignCard;
