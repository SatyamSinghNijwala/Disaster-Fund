'use client';
import React, { useState } from 'react';
import { submitVolunteer } from '@/utils/api/volunteer'; // 👈 import new helper
import styles from '../styles/modules/Volunteer.module.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    message: ''
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
      const res = await submitVolunteer(formData);
      alert('Volunteer form submitted successfully!');
      setFormData({ name: '', email: '', skills: '', message: '' }); // clear form
    } catch (err) {
      console.error('Error submitting volunteer form:', err);
      alert('Failed to submit volunteer form');
    }
  };

  return (
    <section id="Volunteer" className={styles.volunteerSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Become a Volunteer</h2>
        <p className={styles.subtitle}>Join hands with us to support those in need.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="Your Skills"
            required
            value={formData.skills}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Availability / Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="thq-button-filled">Join as Volunteer</button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;
