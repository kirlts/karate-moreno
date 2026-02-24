import React from 'react';
import Hero from './components/Hero';
import Sensei from './components/Sensei';
import Benefits from './components/Benefits';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen font-sans bg-karate-dark antialiased">
      <main>
        <Hero />
        <Sensei />
        <Benefits />
        <Info />
        <Testimonials />
      </main>

      {/* WhatsApp Floating Button globally accessible */}
      <WhatsAppFloat />

      {/* Simple Footer */}
      <footer className="bg-black py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Karate Moreno Itosu-Ryu. Todos los derechos reservados.</p>
        <p className="mt-2 text-gray-600">Arlegui 1273, Viña del Mar | +56 9 9078 6368</p>
      </footer>
    </div>
  );
}

export default App;
