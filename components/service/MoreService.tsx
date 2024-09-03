import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MoreInfoService: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-24 bg-black text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="lg:w-2/5 mb-10 lg:mb-0"
      >
        <h1 className="text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
          Asesoramos a empresas en litigio & transacciones
        </h1>
        <p className="text-md lg:text-lg text-gray-400 leading-relaxed">
          Proporcionamos asesoramiento legal excepcional y soluciones estratégicas en un entorno jurídico, económico y tecnológico en constante evolución.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="lg:w-2/5"
      >
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Oficina moderna" 
            className="object-cover w-full h-full grayscale"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default MoreInfoService;
