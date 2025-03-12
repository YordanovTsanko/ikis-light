import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Searchbar from "./Searchbar";

const navLinks = [
  {
    href: "/",
    label: "Начало",
    icon: <FaHome className="text-primary text-xl" />,
  },
  {
    href: "/sign-in",
    label: "Влизане",
    icon: <FaSignInAlt className="text-primary text-xl" />,
  },
  {
    href: "/sign-up",
    label: "Регистрация",
    icon: <FaUserPlus className="text-primary text-xl" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md relative w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center">
            <img src="/logo192.png" alt="Logo" className="h-16 w-auto" />
          </a>
          {!isMobile && <Searchbar />}
          <ul className="hidden md:flex space-x-6 font-secondary">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-gray-700 hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isMobile && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute px-3 top-full left-0 w-full bg-white flex flex-col space-y-4 py-4 items-center font-secondary shadow-md"
          >
            <Searchbar />
            {navLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-700 hover:text-primary flex items-center space-x-3 py-1"
                >
                  {icon} <span>{label}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
