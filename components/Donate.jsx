'use client';
import React, { useState } from 'react';
import styles from '../styles/modules/Donate.module.css';
import { submitDonation } from '@/utils/api/donation';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    campaign: ''  // optional for now, you can later fetch campaignId
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const cleanedData = { ...formData };
  
    if (!cleanedData.campaign) {
      delete cleanedData.campaign; // ✅ remove empty string
    }
  
    try {
      await submitDonation(cleanedData);
      alert('Donation submitted successfully!');
      setFormData({ name: '', email: '', amount: '', campaign: '' });
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Failed to submit donation');
    }
  };
  

  return (
    <section id="donate" className={styles.donateSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Make a Donation</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="number" name="amount" placeholder="Amount (₹)" value={formData.amount} onChange={handleChange} required />
          <button type="submit" className="thq-button-filled">Donate</button>
        </form>
      </div>
    </section>
  );
};

export default Donate;
