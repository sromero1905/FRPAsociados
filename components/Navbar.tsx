"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("overflow-y-auto", !isNavOpen);
  };

  return (
    <>
      <div
        data-nav-overlay
        aria-hidden="true"
        className={`fixed bg-black/40 inset-0 z-30 ${isNavOpen ? "block" : "hidden"} lg:hidden`}
      />
      <header className="sticky top-0 w-full flex items-center h-20 z-40 bg-black text-white backdrop-filter backdrop-blur-lg">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link href="/" className="relative flex items-center gap-2.5">
              <img
                src="/logo-right.png"
                alt="Logo"
                className="w-18 h-4"
              />
            </Link>
          </div>

          <div
            data-navbar
            className={`absolute top-full translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100 left-0 bg-black py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-4 ${isNavOpen ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible"}`}
          >
            <ul className="flex flex-col lg:flex-row gap-4 lg:items-center text-gray-300 lg:w-full lg:justify-start">
              <li>
                <Link href="/" className="relative py-2.5 px-3 text-gray-300 hover:text-gray-100 group">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="relative py-2.5 px-3 text-gray-300 hover:text-gray-100 group">
                  Sobre Nosotros
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="relative py-2.5 px-3 text-gray-300 hover:text-gray-100 group">
                  Areas De Practica
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative py-2.5 px-3 text-gray-300 hover:text-gray-100 group">
                  Contacto
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:hidden" style={{ transform: "translateX(-10px)" }}>
            <button
              data-toggle-navbar
              data-is-open={isNavOpen ? "true" : "false"}
              aria-label="toggle navbar"
              className="outline-none pl-3 relative py-3"
              onClick={toggleNavbar}
            >
              <span id="line-1" aria-hidden="true" className="h-0.5 w-6 rounded bg-gray-300 transition duration-300"></span>
              <span id="line-2" aria-hidden="true" className="mt-2 h-0.5 w-6 rounded bg-gray-300 transition duration-300"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
