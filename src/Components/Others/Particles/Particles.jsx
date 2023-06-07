import React from 'react';
import Particles from 'react-tsparticles';
import particleParams from './particlesjs-config.json';
import styles from './Particles.module.scss';

function Particular() {
  return (
    <div>
      <Particles width="100%" height="calc(100vh - 4px)" options={particleParams} className={styles.bgParticle} />
    </div>
  );
}

export default Particular;

// Particle Playground -> https://vincentgarreau.com/particles.js/
