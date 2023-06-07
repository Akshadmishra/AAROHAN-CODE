import React from 'react';
import styles from './SubSponsor.module.css';
import { Banner, Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6 } from '../static';
import Navbar from '../Navbar/Navbar';
// const medias = [];
// const Sponsors = [];

function SubSponsor() {
  return (
    <div className={styles.subContainer}>
      <Banner className={styles.image} />
      <div className={styles.heading}>
        <h1>Sponsors</h1>
      </div>
      <div className={styles.flexcontainer}>
        <div className={styles.Sponsors}>
          <h2>Media Sponsors</h2>
          {/* {medias.map((media, index) => (
              <div className={styles.media} key={index}>
                <div>{media}</div>
              </div>
            ))} */}
          <Sponsor6 className={styles.logo} />
        </div>
        <div className={styles.main}>
          <h2>Previous Sponsor and Associations</h2>
          {/* {Sponsors.map((sponsor, index) => (
              <div className={styles.media1} key={index}>
                <div>{sponsor}</div>
              </div>
            ))} */}
          <Sponsor1 className={styles.logo1} />
          <Sponsor2 className={styles.logo} />
          <Sponsor4 className={styles.logo} />
          <Sponsor3 className={styles.logo} />
          <Sponsor5 className={styles.logo} />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default SubSponsor;
