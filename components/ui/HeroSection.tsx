"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export function HeroSection() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/back.jpg"
          alt="Background"
          fill
          objectFit="cover"
          className="filter blur-md brightness-50"
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
          <Link href="#contact" passHref>
            <Button
              radius="full"
              size="md"
              className="bg-gray-800 text-white shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
