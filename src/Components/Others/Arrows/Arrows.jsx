import React from 'react';
import { ArrowUp, ArrowDown } from '../../static';
import styles from './Arrows.module.css';

function Arrows() {
  return (
    <>
      <div className={styles.arrowContainer}>
        <div className={styles.circle}>
          <div className={styles.fas}>
            <ArrowUp />
          </div>
        </div>
      </div>
      <div className={styles.arrowContainer1}>
        <div className={styles.circle1}>
          <div className={styles.fas1}>
            <ArrowDown />
          </div>
        </div>
      </div>
    </>
  );
}

export default Arrows;
