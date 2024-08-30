"use client";

import { motion } from "framer-motion";

const PracticeAreasHero: React.FC = () => {
  return (
    <motion.section
      className="relative bg-black text-white p-8 lg:pb-6 lg:pt-12 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center max-w-2xl mb-18 mt-6 relative z-10">
        <motion.h1
          className="text-4xl lg:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          Áreas de Práctica
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          Descubre nuestras áreas de especialización y cómo podemos ayudarte.
        </motion.p>
        <div className="w-16 h-1 bg-gray-400 mx-auto my-4"></div> {/* Divider */}
      </div>
      
      {/* Líneas diagonales animadas */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/4">
        <div className="flex flex-col space-y-4">
          <motion.div
            className="h-[1px] bg-white w-64 rotate-45"
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          />
          <motion.div
            className="h-[1px] bg-white w-64 rotate-45"
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
          />
          <motion.div
            className="h-[1px] bg-white w-64 rotate-45"
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="h-[1px] bg-white w-64 rotate-45"
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PracticeAreasHero;
