"use client";

import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import PracticeAreasHero from '@/components/service/PracticeAreasHero';
const AboutPage = () => {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden w-full">
      <Navbar />
      <PracticeAreasHero/>
      <Footer />
    </main>
  );
};

export default AboutPage;
