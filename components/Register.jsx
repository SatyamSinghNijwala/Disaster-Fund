'use client';
import React, { useState } from 'react';
import { registerUser } from '@/utils/api/auth';
import styles from '../styles/modules/Auth.module.css';
import { useRouter } from 'next/navigation'; // New

const Register = () => {
  const router = useRouter(); // New
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      console.log('Register Success:', res.data);

      alert('Registration successful! Please login.');

      // Redirect to login page
      router.push('/login');
    } catch (err) {
      console.error('Registration error:', err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <section className={styles.authSection}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="thq-button-filled">Register</button>
      </form>
    </section>
  );
};

export default Register;
