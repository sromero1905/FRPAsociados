"use client"; 

import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen'; 
import HeroSection from '@/components/Hero'; 
import Grid from "@/components/Grid";
import Contacto from '@/components/Footer';
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Navbar from '@/components/Navbar'; 

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
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <Navbar /> 
          <div className="max-w-7xl w-full">
            <HeroSection /> 
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Approach />
            <Contacto />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
