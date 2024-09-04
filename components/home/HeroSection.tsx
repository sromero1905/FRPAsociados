"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function HeroSection() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black w-full"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/back.jpg"
          alt="Background"
          fill
          className="object-cover w-full h-full filter blur-sm brightness-50"
          style={{ transform: 'scale(1.2)' }} // Escalar la imagen para cubrir más área
        />
      </div>

      <div className="relative z-10 px-4 py-16 max-w-screen-lg mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96], // Suavidad adicional
          }}
          className="hero-heading text-white"
        >
          Legal Excellence in Real Estate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.43, 0.13, 0.23, 0.96], // Suavidad adicional
          }}
          className="mt-4 hero-text text-lg text-gray-300"
        >
          Providing expert legal services for all your real estate needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="mt-8 flex justify-center"
        >
          {/* Aquí puedes agregar botones u otros componentes */}
        </motion.div>
      </div>
    </section>
  );
}
