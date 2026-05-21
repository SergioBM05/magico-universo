import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-stone-200/40 pt-24 pb-12 px-6 md:px-12 text-stone-500 font-normal text-xs relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-20 relative z-10">
        
        {/* Columna 1: Identidad Principal */}
        <div className="md:col-span-5 space-y-4 text-left">
          <span className="font-sans text-base tracking-tight font-bold bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent block">
            MÁGICO UNIVERSO
          </span>
          <p className="text-[12px] text-stone-400 leading-relaxed max-w-xs tracking-wide font-sans">
            Dirección artística y montajes escenográficos de vanguardia. Llevando el diseño de espacios efímeros a un estándar digital superior.
          </p>
        </div>

        {/* Columna 2: Navegación del Catálogo (Microinteracciones Pastel) */}
        <div className="md:col-span-3 space-y-4 text-left">
          <span className="text-[10px] tracking-[0.2em] font-bold text-pink-400 uppercase block font-sans flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-pink-300" />
            Contenido
          </span>
          <ul className="space-y-3 text-[11px] tracking-wider text-stone-400 font-bold font-sans">
            {["inicio", "servicios", "galeria", "contacto"].map((item) => (
              <li key={item}>
                <motion.a 
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  href={`#${item}`} 
                  className="hover:text-pink-500 transition-colors duration-200 block w-fit"
                >
                  {item === "galeria" ? "Galería" : item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Información de Atelier */}
        <div className="md:col-span-4 space-y-4 text-left md:text-right">
          <span className="text-[10px] tracking-[0.2em] font-bold text-pink-400 uppercase block font-sans flex items-center md:justify-end gap-1.5">
            <span className="h-1 w-1 rounded-full bg-pink-300" />
            Conectar
          </span>
          <div className="text-[12px] text-stone-400 space-y-1 tracking-wide leading-relaxed font-sans">
            <p className="font-semibold text-stone-800">Valencia, España</p>
            <p>Atención exclusiva bajo cita previa</p>
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/magico_universo_a" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1.5 text-stone-900 font-semibold hover:text-pink-500 transition-colors duration-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-pink-300 inline-block animate-pulse" />
                @magico_universo_a
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Línea inferior final con los Créditos de Copyright y Sedes */}
      <div className="max-w-6xl mx-auto w-full pt-8 border-t border-stone-200/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-wider text-stone-400 font-bold font-sans">
        <p>© {new Date().getFullYear()} MÁGICO UNIVERSO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-2 items-center">
          <span className="px-3 py-0.5 bg-pink-50/50 border border-pink-100/40 rounded-full text-pink-500 font-bold text-[9px] tracking-widest">
            VALENCIA
          </span>
          <span className="px-3 py-0.5 bg-amber-50/50 border border-amber-100/40 rounded-full text-amber-600 font-bold text-[9px] tracking-widest">
            ALZIRA
          </span>
        </div>
      </div>
      
    </footer>
  );
}