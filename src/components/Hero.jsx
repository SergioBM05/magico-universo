import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';

function LiveCounter({ from, to, duration = 2.5 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setCount(Math.floor(value))
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <span>{count}</span>;
}

export default function Hero() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const floatingGlobeY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section 
      ref={targetRef} 
      id="inicio" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden pb-20 md:pb-32 px-6"
    >
      {/* CAPA 1: Luces orgánicas de fondo que potencian el App.jsx */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-90"
      >
        <div className="absolute top-[10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-pink-200/20 blur-[120px]" />
        <div className="absolute bottom-[15%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-amber-100/30 blur-[100px]" />
      </motion.div>

      {/* CAPA 2: Escultura volumétrica de látex flotante (El Gran Globo Orgánico Mate) */}
      <motion.div 
        style={{ y: floatingGlobeY }}
        animate={{ 
          scale: [1, 1.04, 1],
          rotate: [0, 5, 0],
          borderRadius: ["45% 55% 70% 30% / 50% 45% 55% 50%", "60% 40% 55% 45% / 45% 55% 40% 60%", "45% 55% 70% 30% / 50% 45% 55% 50%"] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 sm:w-[520px] sm:h-[520px] bg-gradient-to-tr from-pink-300/10 via-purple-200/10 to-amber-200/10 border border-white/50 backdrop-blur-[2px] z-10 pointer-events-none shadow-[inset_0_4px_30px_rgba(255,255,255,0.6),0_20px_50px_rgba(251,207,232,0.15)]"
      />

      {/* CAPA 3: Interfaz Centralizada */}
      <motion.div style={{ y: textY }} className="relative z-20 max-w-4xl text-center select-none pt-20">
        
        {/* Badge Superior Estilo App con Acento de Marca */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-100/60 shadow-[0_4px_12px_rgba(244,114,182,0.04)] text-[11px] font-semibold text-stone-600 mb-8 cursor-pointer hover:border-pink-200 transition-colors"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          <span className="tracking-wide text-stone-500">Mágico Universo — Agenda Valencia 2026</span>
        </motion.div>

        {/* Título Asíncrono con los Tonos de tu Paleta Pastel */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-stone-900 leading-[1.15] tracking-tight">
          <div className="overflow-hidden py-1">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Escenografías
            </motion.div>
          </div>
          <div className="overflow-hidden py-2">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent pb-2"
            >
              que flotan en el tiempo.
            </motion.div>
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-xs sm:text-base text-stone-500 max-w-md mx-auto font-normal leading-relaxed tracking-wide"
        >
          Diseño volumétrico avanzado y dirección de espacios efímeros para eventos que buscan romper con lo convencional.
        </motion.p>

        {/* Botonera con los nuevos degradados sedosos */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#contacto" 
            className="px-6 py-3 bg-gradient-to-r from-pink-400 via-pink-400 to-amber-300 hover:from-pink-500 hover:to-amber-400 text-white text-xs font-semibold rounded-full shadow-[0_4px_20px_rgba(244,114,182,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 block w-full sm:w-auto text-center"
          >
            Agendar Consultoría
          </a>
          <a 
            href="#servicios" 
            className="px-6 py-3 bg-white hover:bg-stone-50/50 text-stone-600 border border-stone-200/80 rounded-full text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 transform hover:-translate-y-0.5 block w-full sm:w-auto text-center"
          >
            Explorar Servicios
          </a>
        </motion.div>
      </motion.div>

      {/* PANEL DE ESTADÍSTICAS: Adaptado con la paleta suave */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-12 left-0 w-full border-t border-stone-200/40 pt-8 hidden lg:block z-30"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-3 text-center px-6">
          <div className="space-y-1">
            <p className="font-sans text-3xl font-bold tracking-tight text-stone-900">
              +<LiveCounter from={0} to={180} />
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Eventos Diseñados</p>
          </div>
          <div className="space-y-1 border-x border-stone-200/50">
            <p className="font-sans text-3xl font-bold tracking-tight text-pink-400">
              <LiveCounter from={0} to={100} />%
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Exclusividad Mate</p>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-3xl font-bold tracking-tight text-stone-900">
              +<LiveCounter from={0} to={15} />K
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Estructuras Creadas</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}