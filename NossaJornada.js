import React, { useEffect } from 'react';
import './NossaJornada.css'; // Certifique-se de criar um arquivo CSS para estilos específicos

const timelineData = [
  {
    year: '2023',
    title: 'Nascimento do Help All',
    description: 'Iniciamos nossa jornada com o Help All, nosso primeiro projeto voltado para a acessibilidade de deficientes auditivos. Uma plataforma pioneira de ensino e tradução de Libras.',
    position: 'left',
  },
  {
    year: '2024',
    title: 'Evolução e Aprendizado',
    description: 'Aprendemos com os usuários, coletamos feedback e identificamos oportunidades de melhoria. Percebemos o potencial transformador da IA para ampliar o impacto da solução.',
    position: 'right',
  },
  {
    year: '2025',
    title: 'Nasce o Help AI',
    description: 'Evoluímos para o Help AI, incorporando inteligência artificial e recursos avançados para criar uma experiência ainda mais completa e acessível para todos.',
    position: 'left',
  },
];

function NossaJornada() {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-container');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nossa-jornada" className="section">
      <div className="container">
        <h2 className="text-center mb-5">Nossa Jornada de Inclusão Digital</h2>
        <div className="timeline">
          <div className="timeline-bar"></div> {/* Barra central */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-container ${item.position}`}
            >
              <div className="timeline-content">
                <h3 className="h4">{item.year}</h3>
                <h4 className="h5 mb-3">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NossaJornada;