import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-stone-200/60 pt-24 pb-12 px-6 md:px-12 text-stone-500 font-light text-xs">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-20">
        
        {/* Columna 1: Identidad Principal (Ocupa 5 de 12 columnas) */}
        <div className="md:col-span-5 space-y-4 text-left">
          <span className="font-serif text-base tracking-[0.3em] font-semibold text-stone-900 uppercase block">
            MÁGICO UNIVERSO
          </span>
          <p className="text-[11px] text-stone-400 leading-relaxed max-w-xs tracking-wide">
            Dirección artística y montajes escenográficos de vanguardia. Creamos atmósferas que detienen el tiempo.
          </p>
        </div>

        {/* Columna 2: Navegación del Catálogo (Ocupa 3 de 12 columnas) */}
        <div className="md:col-span-3 space-y-4 text-left">
          <span className="text-[10px] tracking-[0.3em] font-bold text-stone-900 uppercase block">
            Navegación
          </span>
          <ul className="space-y-2.5 text-[11px] uppercase tracking-wider text-stone-400 font-medium">
            {["inicio", "servicios", "galeria", "contacto"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="hover:text-stone-900 transition-colors duration-300 block w-fit"
                >
                  {item === "galeria" ? "Galería" : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Información de Atelier / Ubicación (Ocupa 4 de 12 columnas) */}
        <div className="md:col-span-4 space-y-4 text-left md:text-right">
          <span className="text-[10px] tracking-[0.3em] font-bold text-stone-900 uppercase block">
            Contacto & Ubicación
          </span>
          <div className="text-[11px] text-stone-400 space-y-1 tracking-wide leading-relaxed">
            <p className="font-medium text-stone-800">Valencia, España</p>
            <p>Atención bajo cita previa</p>
            <a 
              href="https://www.instagram.com/magico_universo_a" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block mt-2 text-stone-900 font-medium hover:underline underline-offset-4 transition-all"
            >
              @magico_universo_a
            </a>
          </div>
        </div>

      </div>

      {/* Línea inferior final con los Créditos de Copyright */}
      <div className="max-w-6xl mx-auto w-full pt-8 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-stone-400 font-medium">
        <p>© {new Date().getFullYear()} Mágico Universo. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <span className="cursor-crosshair hover:text-stone-600 transition-colors">Valencia / Alzira</span>
        </div>
      </div>
    </footer>
  );
}