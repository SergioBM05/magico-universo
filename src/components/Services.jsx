import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Services() {
  const servicios = [
    { id: "01", title: "Diseño Atmosférico", desc: "Transformación radical de espacios utilizando estructuras de gran formato y paletas cromáticas personalizadas." },
    { id: "02", title: "Esculturas Orgánicas", desc: "Instalaciones fluidas con globos de máxima calidad. Diseños asimétricos que juegan con el entorno." },
    { id: "03", title: "Mesas Editoriales", desc: "Curaduría estética de Candy Bars. Vajilla selecta, papelería fina y detalles integrados conceptualmente." }
  ];

  return (
    <section id="servicios" className="py-40 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-24">
          <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase font-bold mb-3">La Ingeniería del Detalle</p>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-normal tracking-tight">Experiencias Tridimensionales</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicios.map((item, idx) => {
            // Valores de movimiento para rastrear el ratón dentro de ESTA tarjeta
            let mouseX = useMotionValue(0);
            let mouseY = useMotionValue(0);

            function handleMouseMove({ currentTarget, clientX, clientY }) {
              let { left, top } = currentTarget.getBoundingClientRect();
              mouseX.set(clientX - left);
              mouseY.set(clientY - top);
            }

            return (
              <motion.div
                key={idx}
                onMouseMove={handleMouseMove}
                className="relative h-[400px] p-10 border border-stone-200/80 bg-[#FAF8F5]/40 flex flex-col justify-between group overflow-hidden cursor-pointer"
              >
                {/* FACTOR WOW: Un degradado mágico que sigue al ratón solo cuando está encima */}
                <motion.div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-0"
                  style={{
                    background: useMotionTemplate`
                      radial-gradient(
                        250px circle at ${mouseX}px ${mouseY}px,
                        rgba(244, 63, 94, 0.07),
                        rgba(251, 191, 36, 0.05),
                        transparent 80%
                      )
                    `,
                  }}
                />

                <div className="relative z-10">
                  <span className="text-xs font-serif text-stone-400 block mb-12">{item.id}</span>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 transition-transform group-hover:translate-x-2 duration-300">{item.title}</h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">{item.desc}</p>
                </div>

                <div className="relative z-10 pt-4 border-t border-stone-200/60 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-stone-900">
                  <span>Descubrir concepto</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}