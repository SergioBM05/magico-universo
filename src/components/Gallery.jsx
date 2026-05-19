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
      clase: "col-span-12 md:col-span-7" // Eliminamos el margin-bottom fijo problemático
    },
    {
      id: "Obr. 02",
      tag: "detalles",
      titulo: "Estudio de Luz y Reflexión",
      dimensiones: "Panel Shimmer & Elementos Lumínicos",
      soporte: "Estructuras modulares cromadas",
      clase: "col-span-12 md:col-span-5 md:pt-16" // Cambiado -mt por un padding superior suave
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
      clase: "col-span-12 md:col-span-7 md:pt-12" // Cambiado -mt-24 por pt-12 para dar aire sin solapar
    }
  ];

  const obrasFiltradas = filtro === 'todos' 
    ? obras 
    : obras.filter(item => item.tag === filtro);

  return (
    <section id="galeria" className="py-40 bg-white w-full border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabecera de la Exposición + Filtros */}
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-xl">
            <span className="text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase block mb-4">
              Exposición Visual
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-normal tracking-tight leading-tight">
              El arte de transformar <br />lo efímero en memoria.
            </h2>
          </div>

          {/* CONTROLADORES DE FILTRADO */}
          <div className="flex flex-wrap gap-2 text-[10px] tracking-[0.2em] uppercase font-bold">
            {[
              { key: 'todos', label: 'Ver Colección Completa' },
              { key: 'instalaciones', label: 'Grandes Instalaciones' },
              { key: 'mesas', label: 'Mesas & Candy Bars' },
              { key: 'detalles', label: 'Luz & Fondos' }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFiltro(cat.key)}
                className={`px-4 py-2.5 border transition-all duration-300 relative ${
                  filtro === cat.key 
                    ? 'border-stone-900 bg-stone-900 text-white' 
                    : 'border-stone-200 text-stone-400 hover:border-stone-400 hover:text-stone-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* SOLUCIÓN: Rejilla con control de separación de filas rígido (gap-y-24 en desktop) */}
        <motion.div layout className="grid grid-cols-12 gap-x-12 md:gap-x-16 gap-y-16 md:gap-y-32 w-full items-start">
          <AnimatePresence mode="popLayout">
            {obrasFiltradas.map((obra) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={obra.id} 
                className={`${obra.clase} flex flex-col justify-between h-full`}
              >
                
                {/* Bloque Imagen */}
                <div className="w-full">
                  <div className="overflow-hidden bg-[#FAF8F5] border border-stone-200/40 relative group">
                    <div
                      className="w-full h-[350px] sm:h-[480px] flex items-center justify-center text-stone-400 text-xs tracking-widest uppercase font-light transition-all duration-700 ease-out cursor-crosshair group-hover:scale-[1.015]"
                    >
                      {/* <img src="..." className="w-full h-full object-cover" /> */}
                      [ {obra.id} — Fotografía ]
                    </div>
                  </div>

                  {/* Ficha Técnica acoplada al contenedor de la imagen */}
                  <div className="mt-6 pt-4 border-t border-stone-100 grid grid-cols-12 gap-2 text-stone-500 font-light">
                    <div className="col-span-2 text-[10px] font-serif italic text-stone-400">
                      {obra.id}
                    </div>
                    <div className="col-span-10 space-y-1">
                      <h3 className="text-sm font-serif text-stone-900 font-normal tracking-wide">
                        {obra.titulo}
                      </h3>
                      <p className="text-[11px] tracking-wide text-stone-400">
                        {obra.dimensiones}
                      </p>
                      <p className="text-[10px] italic text-stone-300">
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