import React from 'react';
import { motion } from 'framer-motion';
import './App.css'; // Certifique-se de incluir os estilos necessários

const timelineData = [
  {
    year: '2023',
    title: 'Nascimento do Help All',
    description: 'Iniciamos nossa jornada com o Help All, nosso primeiro projeto voltado para a acessibilidade de deficientes auditivos.',
  },
  {
    year: '2024',
    title: 'Evolução e Aprendizado',
    description: 'Aprendemos com os usuários, coletamos feedback e identificamos oportunidades de melhoria.',
  },
  {
    year: '2025',
    title: 'Nasce o Help AI',
    description: 'Evoluímos para o Help AI, incorporando inteligência artificial e recursos avançados.',
  },
];

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <span style={{ color: 'var(--primary-color)' }}>Help</span>AI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nossa-jornada">Nossa Jornada</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#funcionalidades">Funcionalidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tecnologias">Tecnologias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#impacto">Impacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Nossa Jornada */}
      <section id="nossa-jornada" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Nossa Jornada de Inclusão Digital</h2>
          <div className="timeline">
            <div className="timeline-bar"></div>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <h3 className="h4">{item.year}</h3>
                  <h4 className="h5 mb-3">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;