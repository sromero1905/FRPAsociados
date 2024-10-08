import { motion } from 'framer-motion';

const VisionMissionValuesSection = () => {
  return (
    <section className="vision-mission-values-section mb-14">
      <motion.div
        className="motion-div"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h2 className="section-title">Visión</h2>
        <p className="section-text">Proteger y generar riqueza a nuestros clientes en el mercado inmobiliario.</p>
      </motion.div>
      <motion.div
        className="motion-div"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h2 className="section-title">Misión</h2>
        <p className="section-text">Ser el resguardo legal que les permita a nuestros clientes proteger sus derechos y generar riqueza en el ámbito inmobiliario.</p>
      </motion.div>
      <motion.div
        className="motion-div"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h2 className="section-title">Valores</h2>
        <p className="section-text">Honestidad | Sinceridad | Compromiso</p>
      </motion.div>
    </section>
  );
};

export default VisionMissionValuesSection;
