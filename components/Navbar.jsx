// File: components/Navbar.jsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/modules/Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <header className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <Link href="/">
          <img src="/logo.png" alt="Site Logo" className={styles.logo} />
        </Link>
        <nav className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#impact">Impact</a>
          <a href="#campaigns">Campaigns</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
          <a href="#Beneficiaries">Beneficiaries</a>
          <a href="#Volunteer">Volunteer</a>
          <a href="#Feedback">Feedback</a>
        </nav>
        <div className={styles.navActions}>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard">
                <button className="thq-button-outline">Dashboard</button>
              </Link>
              <button className="thq-button-filled" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="thq-button-outline">Login</button>
              </Link>
              <Link href="/register">
                <button className="thq-button-filled">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
