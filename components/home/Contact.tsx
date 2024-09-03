/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contacto: React.FC = () => {
  const { ref: contactoRef, inView: contactoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="contact-section py-28 px-8">
      <div 
        ref={contactoRef}
        className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start"
      >
        {/* Información de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: contactoInView ? 1 : 0, y: contactoInView ? 0 : 30 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96], // Suavidad adicional
          }}
          className="lg:w-2/3 text-center lg:text-left mb-16 lg:mb-0"
        >
          <h2 className="text-6xl md:text-7xl mb-14 tracking-wide title">Contacto</h2>
          <div className="mb-12 contact-info email">
            <p className="text-2xl font-semibold mb-4 title flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
              Email
            </p>
            <p className="text-lg mb-2">
              Envíe sus datos personales y envíenos sus comentarios.
            </p>
            <a
              href="mailto:info@frp.com.ar"
              className="text-lg hover:text-primary-foreground"
            >
              info@frp.com.ar
            </a>
          </div>
          <div className="mb-12 contact-info phones">
            <p className="text-2xl font-semibold mb-4 title flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-4" />
              Teléfono
            </p>
            <p className="text-lg mb-1">
              Puede llamarnos a nuestras oficinas:
            </p>
            <p className="text-lg">Tel.: +54-11 5369-0500</p>
          </div>
          <div className="contact-info address">
            <p className="text-2xl font-semibold mb-4 title flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
              Dirección
            </p>
            <p className="text-lg">
              Dr. Tomás Manuel de Anchorena 1626
            </p>
            <p className="text-lg">
              Ciudad de Buenos Aires (C1425ELL)
            </p>
            <p className="text-lg">
              Buenos Aires, Argentina
            </p>
            <a href="https://maps.app.goo.gl/f2UDg8WJVgW5L39R8" target="_blank" rel="noopener noreferrer">
              <motion.button 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: contactoInView ? 1 : 0, y: contactoInView ? 0 : 30 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="mt-6 px-8 py-3 border-2 border-white text-white text-md rounded-lg hover:bg-black hover:text-white"
              >
                Cómo llegar
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Imagen de Contacto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: contactoInView ? 1 : 0, x: contactoInView ? 0 : 30 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="lg:w-1/2"
        >
          <img
            src="/contact.jpg" 
            alt="Edificio"
            className="rounded-lg shadow-2xl object-cover " // Aquí ajustas la altura
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
