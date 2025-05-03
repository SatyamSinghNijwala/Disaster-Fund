'use client';
import React, { useState } from 'react';
import { submitFeedback } from '@/utils/api/feedback'; // 👈 Import it
import styles from '../styles/modules/Feedback.module.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitFeedback(formData);
      alert('Feedback submitted successfully!');
      setFormData({ name: '', email: '', feedback: '' }); // Clear form
    } catch (err) {
      console.error('Error submitting feedback:', err);
      alert('Failed to submit feedback');
    }
  };

  return (
    <section id="Feedback" className={styles.feedbackSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>We Value Your Feedback</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="feedback"
            placeholder="Your Feedback"
            rows="5"
            required
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="thq-button-outline">Submit Feedback</button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
