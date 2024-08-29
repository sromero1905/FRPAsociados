import { motion } from 'framer-motion';

const InfoSection = () => {
  return (
    <section className="info-section mt-10 mb-10">
      <motion.div
        className="text-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="section-title">Romero Porres y Asociados</h2>
        <p className="section-text">
          Romero Porres y Asociados es un estudio jurídico especializado en derecho inmobiliario, abarca la universalidad de situaciones y problemáticas que acontecen en lo relacionado a los inmuebles en sus diversas manifestaciones.
        </p>
        <p className="section-text ">
          Nuestro estudio sostiene como principio basal que el inmueble y lo relacionado a ello manifiesta el modo de organizar el mundo humano, por ende, nuestro aporte es generar a través de nuestros servicios nuevas posibilidades de crear riqueza en sus diversas expresiones de modo seguro y eficaz.
        </p>
      </motion.div>
      <motion.div
        className="image-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src="/about.jpg" alt="Imagen representativa" />
      </motion.div>
    </section>
  );
};

export default InfoSection;
