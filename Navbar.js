import React from 'react';

function Navbar() {
  return (
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
  );
}

export default Navbar;