import React from 'react';
import { motion } from 'framer-motion';
import './NossaJornada.css';

const timelineData = [
  {
    year: '2023',
    title: 'Nascimento do Help All',
    description: 'Iniciamos nossa jornada com o Help All, nosso primeiro projeto voltado para a acessibilidade de deficientes auditivos. Uma plataforma pioneira de ensino e tradução de Libras.',
  },
  {
    year: '2024',
    title: 'Evolução e Aprendizado',
    description: 'Aprendemos com os usuários, coletamos feedback e identificamos oportunidades de melhoria. Percebemos o potencial transformador da IA para ampliar o impacto da solução.',
  },
  {
    year: '2025',
    title: 'Nasce o Help AI',
    description: 'Evoluímos para o Help AI, incorporando inteligência artificial e recursos avançados para criar uma experiência ainda mais completa e acessível para todos.',
  },
];

function NossaJornada() {
  return (
    <section id="nossa-jornada" className="section">
      <div className="container">
        <h2 className="text-center mb-5">Nossa Jornada de Inclusão Digital</h2>
        <div className="timeline">
          <div className="timeline-bar"></div> {/* Barra central */}
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
  );
}

export default NossaJornada;