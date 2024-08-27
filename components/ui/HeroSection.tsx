"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="heading text-white"
        >
          Legal Excellence in Real Estate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg text-gray-300"
        >
          Providing expert legal services for all your real estate needs.
        </motion.p>

        <div className="mt-8 flex justify-center">
          <Link href="#contact" passHref>
            <Button
              radius="full"
              size="md"
              className="bg-gray-800 text-white shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}