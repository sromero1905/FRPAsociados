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
      <div data-nav-overlay aria-hidden="true" className={`fixed bg-gray-800/40 inset-0 z-30 ${isNavOpen ? "block" : "hidden"} lg:hidden`} />
      <header className="sticky top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link href="/" className="relative flex items-center gap-2.5">
              <span aria-hidden="true" className="flex">
                <span className="w-3 h-6 rounded-l-full flex bg-blue-400"></span>
                <span className="w-3 h-6 rounded-r-full flex bg-indigo-600 mt-2"></span>
              </span>
              <span className="inline-flex text-lg font-bold text-indigo-950 dark:text-white">
                Estam
              </span>
            </Link>
          </div>

          <div data-navbar
            className={`absolute top-full translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6 ${isNavOpen ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible"}`}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              <li><Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Home</Link></li>
              <li><Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Portfolio</Link></li>
              <li><Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Services</Link></li>
              <li><Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Company</Link></li>
              <li><Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Contact</Link></li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              <a href="#" className="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-indigo-600 dark:text-white hover:before:scale-105">
                <span className="relative">Book a call</span>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              data-toggle-navbar
              data-is-open={isNavOpen ? "true" : "false"}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3"
              onClick={toggleNavbar}
            >
              <span id="line-1" aria-hidden="true" className="h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300"></span>
              <span id="line-2" aria-hidden="true" className="mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
