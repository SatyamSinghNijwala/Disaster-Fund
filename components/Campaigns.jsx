'use client';
import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/Campaigns.module.css';
import CampaignCard from './CampaignCard';
import API from '@/utils/api'; // ✅ Correct import

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await API.get('/campaign'); // ✅ API now defined
        console.log('Fetched campaigns:', res.data);
        setCampaigns(res.data.campaigns);
      } catch (err) {
        console.error('Error fetching campaigns:', err);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <section id="campaigns" className={styles.campaignsSection}>
      <h2 className={styles.title}>Ongoing Campaigns</h2>
      <div className={styles.campaignGrid}>
        {Array.isArray(campaigns) && campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} data={campaign} />
        ))}
      </div>
    </section>
  );
};

export default Campaigns;
