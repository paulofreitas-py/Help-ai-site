import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-4">Help AI</h1>
        <h2 className="h3 mb-4">Inteligência Artificial Acessível para Pessoas com Deficiência Auditiva</h2>
        <p className="lead mb-5">Transformando a experiência digital através da inclusão e acessibilidade</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#demonstracao" className="btn btn-light btn-lg">Demonstração</a>
          <a href="#sobre" className="btn btn-outline-light btn-lg">Saiba Mais</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;