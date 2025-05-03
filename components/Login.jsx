'use client';
import React, { useState } from 'react';
import { loginUser } from '@/utils/api/auth';
import styles from '../styles/modules/Auth.module.css';
import { useRouter } from 'next/navigation'; // New

const Login = () => {
  const router = useRouter(); // New
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      console.log('Login Success:', res.data);

      // Save token
      localStorage.setItem('token', res.data.token);

      alert('Login successful!');

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <section className={styles.authSection}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="thq-button-filled">Login</button>
      </form>
    </section>
  );
};

export default Login;
