"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden w-full">
      <Navbar />
      <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
        <h1>Our Services</h1>
        {/* Aquí puedes agregar el contenido específico de la página de servicios */}
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
