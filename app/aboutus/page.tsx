"use client";

import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import AboutHero from '@/components/aboutus/HeroSection';

const AboutPage = () => {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden w-full">
      <Navbar />
      <AboutHero />
      <Footer />
    </main>
  );
};

export default AboutPage;
