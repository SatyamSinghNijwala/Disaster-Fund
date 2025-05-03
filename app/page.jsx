// app/page.jsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';
import Donate from '@/components/Donate';
import Contact from '@/components/Contact';
import Campaigns from '@/components/Campaigns';
import CampaignCard from '@/components/CampaignCard';
import Beneficiaries from '@/components/Beneficiaries';
import Volunteer from '@/components/Volunteer';
import Feedback from '@/components/Feedback';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Campaigns />
      <CampaignCard />
      <Donate />
      <Beneficiaries />
      <Volunteer />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}
