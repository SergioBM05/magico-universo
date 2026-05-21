import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Services() {
  const servicios = [
    { 
      id: "01", 
      title: "Cápsulas San Valentín & Aniversarios", 
      desc: "Regalos románticos que huyen de lo típico. Viales botánicos con rosas preservadas que no se marchitan, lazos de raso y notas caligrafiadas a mano.",
      image: "/images/san-valentin.jpg", // Cambia esto por la foto real de tu clienta
      tag: "Edición Amor"
    },
    { 
      id: "02", 
      title: "Cumpleaños & Fechas Especiales", 
      desc: "Velas orgánicas perfumadas de cera de soja, mini bouquets de flores secas y packagings artesanales con fajas personalizadas que da pena abrir.",
      image: "/images/cumpleanos.jpg", // Cambia esto por la foto real de tu clienta
      tag: "Detalles Únicos"
    },
    { 
      id: "03", 
      title: "Detalles Personalizados \"Porque Sí\"", 
      desc: "Marcasitios calados en madera natural con su nombre para su mesa de trabajo, jabones botánicos y mímica pura para alegrar un día cualquiera.",
      image: "/images/porque-si.jpg", // Cambia esto por la foto real de tu clienta
      tag: "Mímica Pura"
    }
  ];

  return (
    <section id="servicios" className="py-40 bg-transparent w-full relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="mb-24 text-left">
          <p className="text-[10px] tracking-[0.3em] text-pink-400 font-bold font-sans uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-300 animate-pulse" />
            El Arte de Sorprender
          </p>
          <h2 className="text-3xl md:text-5xl font-sans font-semibold text-stone-900 tracking-tight leading-tight">
            Detalles con alma <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-amber-300 bg-clip-text text-transparent">
              para momentos mágicos.
            </span>
          </h2>
        </div>

        {/* Grid de Tarjetas Interactivas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servicios.map((item, idx) => {
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
                whileHover={{ y: -6 }}
                className="relative h-[400px] p-10 border border-stone-200/50 bg-white/70 backdrop-blur-md rounded-2xl flex flex-col justify-between group overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(251,207,232,0.05)] hover:shadow-[0_20px_40px_rgba(251,207,232,0.12)] hover:border-pink-200 transition-all duration-300"
              >
                {/* EFECTO SPOTLIGHT DE FONDO (Solo visible si no se hace hover) */}
                <motion.div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-0 transition duration-500 z-0"
                  style={{
                    background: useMotionTemplate`
                      radial-gradient(
                        300px circle at ${mouseX}px ${mouseY}px,
                        rgba(244, 63, 94, 0.06),
                        transparent 80%
                      )
                    `,
                  }}
                />

                {/* Contenido de Texto (Se desvanece suavemente al hacer hover) */}
                <div className="relative z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                  <span className="text-[11px] font-sans font-bold text-pink-400 bg-pink-50/60 border border-pink-100/50 px-2 py-0.5 rounded-md inline-block mb-8">
                    ✦ Ocasión {item.id}
                  </span>
                  <h3 className="text-xl font-sans font-semibold text-stone-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* FOTO REAL QUE EMERGE EN HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20 overflow-hidden">
                  {/* Imagen de fondo */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  {/* Capa de acabado estético para que las letras blancas resalten */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
                  
                  {/* Badge con la categoría sobre la foto */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-stone-200/20 shadow-sm">
                    <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-stone-800">{item.tag}</p>
                  </div>
                </div>

                {/* Footer de Tarjeta (Cambia a texto blanco integrado sobre la foto en hover) */}
                <div className="relative z-30 pt-4 border-t border-stone-100 group-hover:border-stone-100/20 flex justify-between items-center text-[11px] font-semibold tracking-wide text-stone-400 group-hover:text-white transition-colors duration-300">
                  <span>Ver galería de detalles</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-sm font-sans">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}