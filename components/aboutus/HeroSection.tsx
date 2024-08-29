"use client";

import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <motion.section
      className="about-hero"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Sobre Nosotros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Conoce más sobre nuestro equipo, misión y visión. Estamos dedicados a ofrecer los mejores servicios y soluciones para ti.
        </motion.p>
        <div className="divider"></div>
      
      </div>
    </motion.section>
  );
};

export default AboutHero;
