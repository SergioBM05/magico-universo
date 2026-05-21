import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MagicCursor from './components/MagicCursor'; // <--- Importamos el componente mágico

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#FAF8F7] text-stone-800 font-sans overflow-x-hidden antialiased m-0 p-0 selection:bg-pink-200/40 selection:text-pink-900">
      
      {/* CAPA GLOBAL: Luces pastel de fondo que flotan */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-pink-200/30 to-amber-100/20 blur-[140px]" />
        <div className="absolute top-[40%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/20 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-amber-100/30 via-pink-50/20 to-purple-100/20 blur-[150px]" />
      </div>

      {/* Interfaz e Inyecciones de Código */}
      <div className="relative z-10">
        <Navbar />
        <main className="w-full flex flex-col items-center">
          <Hero />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* ESTELA MÁGICA: Renderiza partículas de globos mate sobre toda la interfaz */}
      <MagicCursor /> {/* <--- Inyectamos el canvas aquí */}
      
    </div>
  );
}