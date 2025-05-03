'use client';
import React, { useState } from 'react';
import styles from '../styles/modules/Contact.module.css';
import { submitContact } from '@/utils/api/contact';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contact Us</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="thq-button-outline">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
