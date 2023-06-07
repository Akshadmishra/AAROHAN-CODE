import React from 'react';
import Navbar from '../../Navbar/Navbar';
import FooterButton from '../../Others/FooterButton/FooterButton';
import Social from '../../Others/Social/Social';
import { Radio } from '../../static';
import styles from './SocialCause.module.css';

function SocialCause() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.socialFlexContainer}>
        <div className={styles.socialContainerLeft}>
          <Radio />
        </div>
        <div className={styles.socialContainerRight}>
          <h1 className={styles.socialHeader}>SOCIAL CAUSE</h1>
          <h2>#plantthefuture</h2>
          <p>
            MIT-WPU Aarohan organized a "Tree Plantation Drive" in 2019. It was a campaign started to plant 501 saplings
            across the city.
          </p>
          <h2>#runforacause</h2>
          <p>
            MIT-WPU Aarohan organized a Marathon for "Education for Underprivileged Children" in 2018 and 2020. It was
            Pune's 1st college marathon.
          </p>
          <div className={styles.socialFourFlex}>
            <div className={styles.socialFourFlexLeft}>
              <h2>BLOODCONNECT</h2>
              <p>Blood Donation Camp</p>
              <h2>SAMPARC</h2>
              <p>Education for Underprivileged</p>
            </div>
            <div className={styles.socialFourFlexRight}>
              <h2>BHOOMI</h2>
              <p>Education for Underprivileged</p>
              <h2>MATOSHREE</h2>
              <p>'Bring back at Smile' for Senior Citizens</p>
            </div>
          </div>
        </div>
      </div>
      <Social />
      <FooterButton />
      <Navbar />
    </div>
  );
}

export default SocialCause;
