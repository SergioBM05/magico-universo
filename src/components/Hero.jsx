import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';

// Mini-componente con JS puro para animar los números al cargar
function LiveCounter({ from, to, duration = 2.5 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1], // Entrada ultrasuave
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

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const floatingGlobeY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section 
      ref={targetRef} 
      id="inicio" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#FAF8F5] overflow-hidden pb-20 md:pb-32"
    >
      {/* CAPA 1: Fondo difuminado orgánico */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-60"
      >
        <div className="absolute top-12 left-[10%] w-[45vw] h-[45vw] rounded-full bg-pink-100/40 blur-[120px]" />
        <div className="absolute bottom-12 right-[5%] w-[35vw] h-[35vw] rounded-full bg-amber-100/50 blur-[100px]" />
      </motion.div>

      {/* CAPA 2: Elemento escultórico flotante */}
      <motion.div 
        style={{ y: floatingGlobeY }}
        animate={{ 
          scale: [1, 1.04, 1],
          borderRadius: ["42% 58% 70% 30% / 45% 45% 55% 55%", "70% 30% 52% 48% / 60% 40% 60% 40%", "42% 58% 70% 30% / 45% 45% 55% 55%"] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-stone-200/20 via-pink-50/10 to-amber-50/20 border border-white/40 backdrop-blur-[2px] z-10 pointer-events-none mix-blend-darken shadow-inner"
      />

      {/* CAPA 3: Tipografía Fragmentada */}
      <motion.div style={{ y: textY }} className="relative z-20 max-w-5xl px-6 text-center select-none pt-20">
        <div className="overflow-hidden mb-4">
          <motion.span 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.6em] font-bold text-stone-400 uppercase block"
          >
            Mágico Universo — Valencia
          </motion.span>
        </div>

        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif text-stone-900 leading-[1.05] tracking-tight font-normal">
          <div className="overflow-hidden py-2">
            <motion.div
              initial={{ y: "100%", rotate: 3 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Escenografías
            </motion.div>
          </div>
          <div className="overflow-hidden py-2">
            <motion.div
              initial={{ y: "100%", rotate: -2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="italic text-stone-400 font-light font-sans tracking-wide text-3xl sm:text-6xl lg:text-7xl mt-2 block"
            >
              que flotan en el tiempo.
            </motion.div>
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-xs sm:text-sm text-stone-500 max-w-md mx-auto font-light leading-relaxed tracking-wide"
        >
          Diseño volumétrico y dirección artística para celebraciones en Valencia que merecen ser eternas.
        </motion.p>
      </motion.div>

      {/* JS INTERACTIVO: Panel de estadísticas vivas al pie del Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-12 left-0 w-full border-t border-stone-200/40 pt-6 hidden lg:block z-30"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-3 text-center px-6 text-stone-600">
          <div>
            <p className="font-serif text-3xl text-stone-900 font-medium">
              +<LiveCounter from={0} to={180} />
            </p>
            <p className="text-[9px] uppercase tracking-[0.25em] text-stone-400 mt-1.5 font-bold">Eventos Diseñados</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-stone-900 font-medium">
              <LiveCounter from={0} to={100} />%
            </p>
            <p className="text-[9px] uppercase tracking-[0.25em] text-stone-400 mt-1.5 font-bold">Exclusividad Mate</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-stone-900 font-medium">
              +<LiveCounter from={0} to={15} />K
            </p>
            <p className="text-[9px] uppercase tracking-[0.25em] text-stone-400 mt-1.5 font-bold">Composiciones Creadas</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}