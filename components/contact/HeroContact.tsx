"use client";

import { motion } from "framer-motion";

const HeroContact: React.FC = () => {
  return (
    <motion.section
      className="relative bg-black text-white p-8 lg:pb-6 lg:pt-12 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center max-w-2xl mb-18 mt-6 relative z-10">
        <motion.h2
          className="text-4xl lg:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          Estamos Aquí para Ayudarte
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          ¿Tienes preguntas? Contáctanos, estamos aquí para asistirte.
        </motion.p>
        <div className="w-16 h-1 bg-gray-400 mx-auto my-4"></div> {/* Divider */}
     
      
     
      </div>
    </motion.section>
  );
};

export default HeroContact;