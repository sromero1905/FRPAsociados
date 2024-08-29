"use client";

import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import AboutHero from '@/components/aboutus/HeroSection';
import InfoSection from '@/components/aboutus/Info';
import VisionMissionValuesSection from '@/components/aboutus/VisionMissionValuesSection';
const AboutPage = () => {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden w-full">
      <Navbar />
      <AboutHero />
      <InfoSection/>
      <VisionMissionValuesSection/>
      <Footer />
    </main>
  );
};

export default AboutPage;
