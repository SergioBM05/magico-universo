import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
      <motion.header 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl bg-white/60 backdrop-blur-xl pointer-events-auto flex justify-between items-center px-6 py-2.5 rounded-full border border-pink-100/30 shadow-[0_8px_32px_rgba(244,114,182,0.03)]"
      >
        {/* Logo con el tono principal de la marca */}
        <span className="font-sans text-xs sm:text-sm tracking-wide font-bold bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent cursor-pointer">
          MÁGICO UNIVERSO
        </span>
        
        {/* Navegación estilo App Pastel */}
        <nav className="hidden sm:flex gap-1 text-xs font-semibold text-stone-500 bg-pink-50/40 p-1 rounded-full border border-pink-100/20">
          {["inicio", "servicios", "galeria", "contacto"].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="px-3.5 py-1.5 hover:text-pink-500 hover:bg-white rounded-full transition-all duration-300 text-[11px] tracking-wide"
            >
              {item === "galeria" ? "Galería" : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        
        {/* Botón de conversión Premium en Rosa Empolvado y Melocotón */}
        <a 
          href="#contacto" 
          className="px-4 py-2 bg-gradient-to-r from-pink-400 via-pink-400 to-amber-300 hover:from-pink-500 hover:to-amber-400 text-white text-[11px] font-semibold tracking-wide rounded-full shadow-[0_4px_14px_rgba(244,114,182,0.2)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]"
        >
          Agendar Cita
        </a>
      </motion.header>
    </div>
  );
}