import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contacto" className="py-40 px-6 max-w-5xl mx-auto w-full border-t border-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Lado izquierdo: El mensaje conceptual / Manifiesto */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 space-y-4 text-left"
        >
          <span className="text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase block">
            Próximas Fechas
          </span>
          <h2 className="text-3xl font-serif text-stone-900 font-normal leading-tight">
            Creemos algo <br />
            fuera de lo común.
          </h2>
          <div className="w-12 h-[1px] bg-stone-300 my-6" />
          <p className="text-xs text-stone-500 font-light leading-relaxed tracking-wide">
            La agenda para eventos grandes en Valencia suele completarse con meses de antelación. Cuéntanos tu idea para asegurar tu fecha en nuestro calendario de diseño.
          </p>
        </motion.div>

        {/* Lado derecho: La "Tarjeta de Invitación" Interactiva */}
        <div className="md:col-span-7 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="border border-stone-200/80 p-10 md:p-14 bg-[#FAF8F5]/50 text-left relative overflow-hidden"
          >
            {/* Sutil número de catálogo de fondo de la tarjeta */}
            <span className="absolute top-8 right-10 text-[10px] font-serif italic text-stone-300">
              Form. 024 / Val
            </span>

            <h3 className="text-xl font-serif text-stone-800 mb-4 font-normal tracking-wide">
              ¿Comenzamos a diseñar?
            </h3>
            
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-12 max-w-md">
              Escríbenos directamente para agendar una consultoría estética. Analizaremos la temática, la paleta de color y las estructuras ideales para tu espacio.
            </p>

            {/* BOTÓN PREMIUM INTERACTIVO */}
            <div className="max-w-xs">
              <motion.a 
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/tu_numero" 
                target="_blank" 
                rel="noreferrer" 
                className="relative px-6 py-4 border border-stone-900 text-stone-950 font-bold text-[10px] tracking-[0.3em] uppercase text-center block w-full overflow-hidden group transition-colors duration-300"
              >
                {/* Capa de fondo que se expande hacia arriba en Hover de manera fluida */}
                <span className="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1] z-0" />
                
                {/* Texto del botón */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 block">
                  Solicitar Dossier — WA
                </span>
              </motion.a>
            </div>

            {/* Detalle de pie de página estilo documento de diseño */}
            <div className="mt-12 pt-6 border-t border-stone-200/40 flex justify-between items-center text-[9px] text-stone-400 tracking-widest uppercase font-light">
              <span>Mágico Universo © 2026</span>
              <span>Valencia, ES</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}