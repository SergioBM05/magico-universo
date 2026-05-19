import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 px-6 md:px-12 py-4 flex justify-between items-center border-b border-stone-100"
    >
      <span className="font-serif text-lg tracking-widest font-semibold text-stone-800">
        MÁGICO UNIVERSO
      </span>
      <nav className="hidden sm:flex gap-8 text-xs uppercase font-medium tracking-widest text-stone-500">
        {["inicio", "servicios", "galeria", "contacto"].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            className="hover:text-stone-900 transition-colors relative group py-1"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            {/* Línea animada inferior al pasar el mouse */}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        ))}
      </nav>
      <a href="#contacto" className="px-5 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-none hover:bg-stone-800 transition-colors duration-300">
        Contacto
      </a>
    </motion.header>
  );
}