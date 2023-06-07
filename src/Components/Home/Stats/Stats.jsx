import React from 'react';
import CountUp from 'react-countup';
import styles from './Stats.module.css';
import { Astro } from '../../static';
import Social from '../../Others/Social/Social';
import FooterButton from '../../Others/FooterButton/FooterButton';
import Navbar from '../../Navbar/Navbar';

function Stats() {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.containerLeft}>
          <h1 className={styles.header}>STATISTICS</h1>
          <h3>
            <CountUp end={33} duration={5} decimals={3} decimal={','} useEasing={true} /> +
          </h3>
          <h2>FOOTFALL</h2>
          <h3>
            <CountUp end={3500} duration={5} useEasing={true} /> +
          </h3>
          <h2>PARTICIPANTS</h2>
          <h3>
            <CountUp end={150} duration={5} useEasing={true} /> +
          </h3>
          <h2>COLLEGES</h2>
          <h3>
            <CountUp end={10} duration={5} useEasing={true} /> Lac +
          </h3>
          <h2>WORTH PRIZES</h2>
          <h3>
            <CountUp end={10} duration={5} useEasing={true} /> Lac +
          </h3>
          <h2>ONLINE REACH</h2>
        </div>
        <div className={styles.containerRight}>
          <Astro />
        </div>
      </div>
      <Social />
      <FooterButton />
      <Navbar />
    </div>
  );
}

export default Stats;
