import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [filtro, setFiltro] = useState('todos');

  const obras = [
    {
      id: "Obr. 01",
      tag: "instalaciones",
      titulo: "Composición Orgánica en Tonos Tierra",
      dimensiones: "Instalación de Gran Formato — Valencia",
      soporte: "Fondo escenográfico y globos mate de alta gama",
      clase: "col-span-12 md:col-span-7"
    },
    {
      id: "Obr. 02",
      tag: "detalles",
      titulo: "Estudio de Luz y Reflexión",
      dimensiones: "Panel Shimmer & Elementos Lumínicos",
      soporte: "Estructuras modulares cromadas",
      clase: "col-span-12 md:col-span-5 md:pt-16" 
    },
    {
      id: "Obr. 03",
      tag: "mesas",
      titulo: "Simetría Imperfecta",
      dimensiones: "Mesa Editorial / Candy Bar",
      soporte: "Curaduría textil, cristal y papelería fina",
      clase: "col-span-12 md:col-span-5"
    },
    {
      id: "Obr. 04",
      tag: "instalaciones",
      titulo: "Geometría Volumétrica",
      dimensiones: "Arco Desestructurado XL",
      soporte: "Escultura biodegradable suspendida",
      clase: "col-span-12 md:col-span-7 md:pt-12" 
    }
  ];

  const obrasFiltradas = filtro === 'todos' 
    ? obras 
    : obras.filter(item => item.tag === filtro);

  return (
    <section id="galeria" className="py-40 bg-transparent w-full relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabecera de la Exposición + Filtros estilo App Pastel */}
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-xl">
            <span className="text-[10px] tracking-[0.3em] font-bold text-pink-400 uppercase block mb-3 font-sans flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-300 animate-pulse" />
              Exposición Visual
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-semibold text-stone-900 tracking-tight leading-tight">
              El arte de transformar <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                lo efímero en memoria.
              </span>
            </h2>
          </div>

          {/* CONTROLADORES DE FILTRADO (Estilo Tabs de App Premium) */}
          <div className="flex flex-wrap gap-1.5 bg-pink-50/30 p-1 rounded-full border border-pink-100/20 text-[11px] font-semibold text-stone-500">
            {[
              { key: 'todos', label: 'Colección Completa' },
              { key: 'instalaciones', label: 'Instalaciones' },
              { key: 'mesas', label: 'Mesas & Candy Bars' },
              { key: 'detalles', label: 'Luz & Fondos' }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFiltro(cat.key)}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-sans ${
                  filtro === cat.key 
                    ? 'bg-white text-pink-500 shadow-[0_4px_12px_rgba(244,114,182,0.08)] border border-pink-100/50 font-bold' 
                    : 'bg-transparent text-stone-400 hover:text-stone-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sala de Exposición con Rejilla Asimétrica Protegida */}
        <motion.div layout className="grid grid-cols-12 gap-x-12 md:gap-x-16 gap-y-16 md:gap-y-32 w-full items-start">
          <AnimatePresence mode="popLayout">
            {obrasFiltradas.map((obra) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={obra.id} 
                className={`${obra.clase} flex flex-col justify-between h-full group/card`}
              >
                
                {/* Bloque Imagen */}
                <div className="w-full">
                  <div className="overflow-hidden bg-white/60 backdrop-blur-sm border border-pink-100/20 rounded-2xl relative shadow-[0_4px_20px_rgba(251,207,232,0.03)] transition-all duration-500 group-hover/card:shadow-[0_20px_40px_rgba(251,207,232,0.1)] group-hover/card:border-pink-200">
                    <div
                      className="w-full h-[350px] sm:h-[480px] flex items-center justify-center bg-gradient-to-tr from-pink-50/20 to-amber-50/10 text-stone-400 text-xs tracking-widest uppercase font-sans transition-all duration-700 ease-out cursor-crosshair group-hover/card:scale-[1.015]"
                    >
                      {/* <img src="..." className="w-full h-full object-cover rounded-2xl" /> */}
                      [ {obra.id} — Vista Previa ]
                    </div>
                  </div>

                  {/* Ficha Técnica Estilo Metadata */}
                  <div className="mt-6 pt-4 border-t border-stone-100 grid grid-cols-12 gap-2 text-stone-500 font-normal">
                    <div className="col-span-2 text-[11px] font-sans text-pink-400 font-bold">
                      • {obra.id.replace('Obr. ', '')}
                    </div>
                    <div className="col-span-10 space-y-1.5">
                      <h3 className="text-base font-sans font-semibold text-stone-900 tracking-tight group-hover/card:text-pink-500 transition-colors duration-300">
                        {obra.titulo}
                      </h3>
                      <p className="text-xs tracking-wide text-stone-400 font-sans">
                        {obra.dimensiones}
                      </p>
                      <p className="text-[11px] text-pink-500 font-sans font-medium bg-pink-50/50 border border-pink-100/30 px-2.5 py-0.5 rounded-full inline-block mt-1">
                        {obra.soporte}
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}