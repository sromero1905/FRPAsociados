import { motion } from 'framer-motion';

const VisionMissionValuesSection = () => {
  return (
    <section className="vision-mission-values-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Visión</h2>
        <p>Proteger y generar riqueza a nuestros clientes en el mercado inmobiliario.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Misión</h2>
        <p>Ser el resguardo legal que les permita a nuestros clientes proteger sus derechos y generar riqueza en el ámbito inmobiliario.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Valores</h2>
        <p>Honestidad | Sinceridad | Compromiso</p>
      </motion.div>
    </section>
  );
};

export default VisionMissionValuesSection;
