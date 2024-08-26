"use client"; // Necesario para usar hooks

import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen'; // Asegúrate de la ruta correcta
import HeroSection from '@/components/Hero'; // Asegúrate de la ruta correcta
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

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
          <div className="max-w-7xl w-full">
            <HeroSection /> {/* Reemplaza HomePage con HeroSection */}
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Approach />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
