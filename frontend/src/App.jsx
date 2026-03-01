import React from 'react';
import Hero from './components/Hero';
import Sensei from './components/Sensei';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen font-sans bg-karate-white antialiased">
      <main>
        <Hero />
        <Sensei />
        <Benefits />
        <Gallery />
        <Info />
        <Testimonials />
      </main>

      {/* WhatsApp Floating Button globally accessible */}
      <WhatsAppFloat />

      {/* Simple Footer */}
      <footer className="bg-white py-12 text-center text-gray-400 text-sm border-t border-black/5">
        <p className="font-display font-medium text-karate-dark mb-2">&copy; {new Date().getFullYear()} Karate Moreno Itosu-Ryu. Tradición en Viña del Mar.</p>
        <p className="max-w-xs mx-auto">Arlegui 1273, Segundo Piso | +56 9 9078 6368</p>
      </footer>
    </div>
  );
}

export default App;
