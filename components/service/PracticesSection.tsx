import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaGavel, FaHandshake, FaHome } from 'react-icons/fa';

const practices = [
  {
    title: "Gestión de Consorcios",
    description: "Ofrecemos soporte integral a administradores de consorcios con una representación legal sólida en conflictos y procesos judiciales. Nuestro enfoque asegura una administración eficiente y conforme a la legislación vigente.",
    icon: <FaBuilding className="card-icon" />
  },
  {
    title: "Transacciones Inmobiliarias",
    description: "Proporcionamos asesoría experta en la compra y venta de inmuebles, asegurando un proceso seguro y eficiente. Facilitamos la gestión de contratos, negociaciones y verificaciones legales para una transacción sin inconvenientes.",
    icon: <FaGavel className="card-icon" />
  },
  {
    title: "Desarrollo Inmobiliario",
    description: "Brindamos consultoría especializada en la planificación y desarrollo de proyectos inmobiliarios. Desde el diseño inicial hasta la estructuración de contratos fiduciarios, garantizamos una ejecución exitosa y conforme a los estándares del sector.",
    icon: <FaHandshake className="card-icon" />
  },
  {
    title: "Administración de Alquileres",
    description: "Gestionamos de manera profesional todos los aspectos relacionados con la administración de alquileres, incluyendo la redacción de contratos, la gestión de cobros y la resolución de conflictos entre arrendadores y arrendatarios.",
    icon: <FaHome className="card-icon" />
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1.0,
    },
  },
};

const PracticesSection: React.FC = () => {
  return (
    <section className="practices-section mt-20">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="text-4xl font-light text-center text-white tracking-widest mb-16"
        >
          Nuestras Especializaciones
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              className="card relative bg-gray-800 rounded-lg p-8 shadow-lg transition-transform transform-gpu hover:scale-105"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
            >
              <div className="flex items-start mb-4 gap-4">
                {practice.icon}
                <h3 className="card-title">{practice.title}</h3>
              </div>
              <p className="card-description">{practice.description}</p>
              <div className="card-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;
