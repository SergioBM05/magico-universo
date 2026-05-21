import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contacto" className="py-40 px-6 max-w-5xl mx-auto w-full relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Lado izquierdo: El mensaje de escasez y valor de marca */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 space-y-4 text-left"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold text-pink-400 uppercase block font-sans flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-300 animate-pulse" />
            Próximas Fechas
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-stone-900 tracking-tight leading-tight">
            Creemos algo <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              fuera de lo común.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed tracking-wide pt-2 font-sans">
            La agenda para eventos grandes en Valencia suele completarse con meses de antelación. Cuéntanos tu idea para asegurar tu fecha en nuestro calendario de diseño.
          </p>
        </motion.div>

        {/* Lado derecho: La Tarjeta de Conversión Premium Mágica */}
        <div className="md:col-span-7 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border border-pink-100/30 rounded-2xl p-10 md:p-14 bg-white/70 backdrop-blur-md shadow-[0_4px_30px_rgba(251,207,232,0.04)] hover:shadow-[0_20px_50px_rgba(251,207,232,0.12)] hover:border-pink-200 transition-all duration-500 text-left relative overflow-hidden"
          >
            {/* Tag de estado superior estilo micro-app pastel */}
            <span className="absolute top-8 right-10 text-[9px] font-sans tracking-widest text-pink-400 uppercase bg-pink-50/50 border border-pink-100/40 px-2.5 py-0.5 rounded-full font-bold">
              Form. 026 / VAL
            </span>

            <h3 className="text-xl font-sans font-semibold text-stone-900 mb-3 tracking-tight">
              ¿Comenzamos a diseñar?
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed mb-10 max-w-md font-sans">
              Escríbenos directamente para agendar una consultoría estética. Analizaremos la temática, la paleta de color y las estructuras ideales para tu espacio.
            </p>

            {/* BOTÓN INTERACTIVO: Gradiente Dulce de Alta Conversión */}
            <div className="max-w-xs">
              <motion.a 
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/tu_numero" 
                target="_blank" 
                rel="noreferrer" 
                className="relative px-6 py-4 bg-gradient-to-r from-pink-400 via-pink-400 to-amber-300 hover:from-pink-500 hover:to-amber-400 text-white font-bold text-xs tracking-wide rounded-full text-center block w-full shadow-[0_4px_20px_rgba(244,114,182,0.2)] transition-all duration-300 z-10 font-sans"
              >
                Solicitar Dossier por WhatsApp
              </motion.a>
            </div>

            {/* Detalle de pie de página limpio estilo metadata */}
            <div className="mt-12 pt-6 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-400 tracking-wider font-bold font-sans">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400 inline-block animate-pulse" />
                Mágico Universo © 2026
              </span>
              <span className="text-stone-400">Valencia, ES</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}