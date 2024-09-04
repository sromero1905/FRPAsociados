"use client";

import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import HeroContact from '@/components/contact/HeroContact';
import ContactForm from '@/components/contact/FormContact';

const AboutPage = () => {
  return (
  <main className="relative bg-black flex flex-col overflow-hidden w-full min-h-screen">
      <Navbar />
       <HeroContact/>
      <ContactForm/>
      <Footer />
    </main>
  );
};

export default AboutPage;
