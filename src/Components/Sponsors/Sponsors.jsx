import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Sponsors.module.css';

const sponsorsVariant = {
  hidden: { x: '-100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0, type: 'spring', stiffness: 30 }
  }
};

function Sponsors() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1300) {
      setSmall(true);
    }
    console.log(window);
  }, []);
  return (
    <div className={styles.Sponser_container}>
      <div className={styles.FlexContainer}>
        <motion.div className={styles.left} variants={sponsorsVariant} initial="hidden" animate="visible">
          <h1>SPONSORS</h1>
          <h2>WHY INVEST IN US?</h2>
          <p>
            Aarohan's splendour has been established on the backbone of the trust and backing we receive from our
            benevolent sponsors, the strenuous job of procuring which is taken care by the very dedicated and
            conscientious sponsorship team.
          </p>
          <h3>Link to microwebsite:</h3>
          <a
            style={{ textDecoration: 'underline', color: 'white', fontSize: '18px', fontWeight: '500' }}
            href={`${
              small
                ? 'https://drive.google.com/file/d/1KNopzxyZiHoGlfyLENRfpeT7XHwbaINR/view?usp=drivesdk'
                : '/#/subsponsor'
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Sponsors
          </a>
        </motion.div>
        <div className={styles.right}></div>
      </div>
      <Navbar />
    </div>
  );
}

export default Sponsors;
