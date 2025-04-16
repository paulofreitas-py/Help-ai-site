import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Sobre from './components/Sobre';
import NossaJornada from './components/NossaJornada';
import Funcionalidades from './components/Funcionalidades';
import Tecnologias from './components/Tecnologias';
import Impacto from './components/Impacto';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Sobre />
      <NossaJornada />
      <Funcionalidades />
      <Tecnologias />
      <Impacto />
      <Footer />
    </div>
  );
}

export default App;t