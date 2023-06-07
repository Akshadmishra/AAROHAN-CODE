import React from 'react';
import { Facebook, Insta, Twitter, LinkedIn } from '../../static';
import { motion } from 'framer-motion';
import styles from './Social.module.css';

const socialIcons = {
  hidden: { x: '100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

function Social() {
  return (
    <motion.div
      className={styles.icons}
      variants={socialIcons}
      style={{ backgroundColor: 'transparent' }}
      initial="hidden"
      animate="visible"
    >
      <span className={styles.iconsMargin}>
        <a href="https://twitter.com/mitaarohanfest?lang=en">
          <Twitter />
        </a>
      </span>
      <span className={styles.iconsMargin}>
        <a href="https://www.linkedin.com/company/mit-wpu-aarohan-the-cultural-fest/?originalSubdomain=in">
          <LinkedIn />
        </a>
      </span>
      <span className={styles.iconsMargin}>
        <a href="https://www.facebook.com/aarohanfest/">
          <Facebook />
        </a>
      </span>
      <span className={styles.iconsMargin}>
        <a href="https://www.instagram.com/mitaarohanfest/?hl=en">
          <Insta />
        </a>
      </span>
    </motion.div>
  );
}

export default Social;
