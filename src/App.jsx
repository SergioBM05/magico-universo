import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-stone-800 font-sans overflow-x-hidden antialiased m-0 p-0">
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}