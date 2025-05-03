// File: app/dashboard/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    } else {
      // Simulated user fetch from token (replace with real API call)
      const dummyUser = {
        name: 'Satyam',
        email: 'satyam@example.com',
        role: 'donor',
      };
      setUser(dummyUser);
    }
  }, [router]);

  if (!user) return null;

  return (
    <main className="min-h-screen p-6 flex flex-col gap-6 items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Welcome, {user.name} 👋</h1>
      <p className="text-lg text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-gray-500">Role: {user.role}</p>

      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <a href="#donate" className="thq-button-filled">Donate Again</a>
        <a href="#volunteer" className="thq-button-outline">Become a Volunteer</a>
        <a href="#feedback" className="thq-button-outline">Give Feedback</a>
      </div>
    </main>
  );
}
