"use client";

import HeroSection from '@/components/Hero'; 
import AreasDePractica from '@/components/ui/BentoGrid';
import Contacto from '@/components/Contact';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen'; 
import { useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onLoaded={handleLoaded} />
      ) : (
        <main className="relative bg-black flex flex-col overflow-hidden w-full">
          <Navbar /> 
          <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
            <HeroSection />
            <AreasDePractica />
            <Contacto />
          </div>
          <Footer />
        </main>
      )}
    </>
  );
};

export default Home;
