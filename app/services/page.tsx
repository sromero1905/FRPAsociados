"use client";

import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import PracticeAreasHero from '@/components/service/PracticeAreasHero';
import PracticesSection from '@/components/service/PracticesSection';
import MoreInfoService from '@/components/service/MoreService';
const AboutPage = () => {
  return (
  <main className="relative bg-black flex flex-col overflow-hidden w-full min-h-screen">
      <Navbar />
      <PracticeAreasHero/>
      <PracticesSection/>
      <MoreInfoService/>
      <Footer />
    </main>
  );
};

export default AboutPage;
