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
         Gestión Integral para Consorcios y Propiedades Horizontales
        </h1>
        <p className="text-md lg:text-lg text-gray-400 leading-relaxed">
          Brindamos asistencia continua en la gestión de consorcios, enfocándonos en la resolución de conflictos, el asesoramiento legal en asambleas, y la representación en la Ciudad Autónoma de Buenos Aires. Implementamos sistemas de comunicación eficientes para optimizar la gestión de cobranzas y notificaciones. Además, realizamos informes técnicos, apoyamos en la compra, venta y administración de inmuebles, y participamos en el desarrollo de proyectos inmobiliarios y la gestión integral de alquileres.
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
  src="/sign.jpg" 
  alt="Firma" 
  className="object-cover w-full h-full grayscale"
  style={{ transform: 'scale(0.8)' }} 
/>

        </div>
      </motion.div>
    </section>
  );
};

export default MoreInfoService;
