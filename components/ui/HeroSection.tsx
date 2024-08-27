"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Imagen de fondo desenfocada */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/pexels-pixabay-273682.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="filter blur-md brightness-50"
        />
      </div>

      <div className="relative z-10 px-4 py-16 max-w-screen-lg mx-auto text-center">
        {/* Títulos y texto */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          className="heading text-white"
        >
          Legal Excellence in Real Estate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.2,
          }}
          className="mt-4 text-lg text-gray-300"
        >
          Providing expert legal services for all your real estate needs.
        </motion.p>

        {/* Botón personalizado */}
        <div className="mt-8 flex justify-center">
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Button
              radius="full"
              size="lg"
              className="bg-gray-800 text-white shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact Us
              </ScrollLink>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
