import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.1, // El footer debe estar al menos un 10% visible para activar la animación
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="bg-background text-center mt-16 w-full"
    >
      <div className="w-full px-4 py-12 space-y-6">
        <h2 className="text-primary text-xl font-semibold">FRP ASOCIADOS</h2>
        <p className="text-sm text-muted-foreground">
          © Copyright 2024 — FRP ASOCIADOS. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground max-w-prose mx-auto leading-relaxed">
          La información disponible en el sitio web de <span className="font-semibold text-primary">FRP ASOCIADOS</span> sólo posee fines informativos, no garantizándose que la misma sea completa o actualizada. Adicionalmente, la información disponible es de carácter general y, por lo tanto, puede no resultar aplicable al caso concreto.
        </p>
        <p className="text-xs text-muted-foreground max-w-prose mx-auto leading-relaxed">
          Con motivo de lo anterior, la información aquí contenida no debe considerarse como asesoramiento legal brindado por <span className="font-semibold text-primary">FRP ASOCIADOS</span>. Ante cualquier duda, por favor contáctese con nosotros escribiéndonos a <a href="mailto:info@frp.com.ar" className="underline text-primary transition-colors duration-300 hover:text-muted-foreground">info@frp.com.ar</a>
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <button className="text-xs text-primary underline transition-colors duration-300 hover:text-muted-foreground">
            Términos y Condiciones
          </button>
          <button className="text-xs text-primary underline transition-colors duration-300 hover:text-muted-foreground">
            Políticas de Privacidad
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
