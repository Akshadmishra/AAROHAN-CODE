import React from 'react';
import styles from './Loader.module.css';
import cx from 'classnames';

function Loader() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.loader}>
          <div className={styles.rinkin_coffee}>
            <span className={styles.rinkin}>arohan</span>
            <span className={styles.coffee}>2021</span>
          </div>
          <span className={styles.slogan}>Pune's Largest Cultural Fest.</span>
          <div className={cx(styles.rectangle, styles.outlines)}>
            <span>A</span>
          </div>
          <div className={cx(styles.rectangle, styles.fill)}>
            <span>A</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loader;
