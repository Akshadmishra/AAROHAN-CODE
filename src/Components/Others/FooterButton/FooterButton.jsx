import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FooterButton.module.css';
import { motion } from 'framer-motion';

const footerButton = {
  hidden: { y: '100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  },
  hover: {
    textShadow: '0px 0px 5px rgb(255,255,255)',
    boxShadow: '0px 0px 5px rgb(255,255,255)',
    transition: { type: 'spring', stiffness: 150 }
  },
  tap: {
    scale: '0.9',
    transition: { type: 'spring', stiffness: 300 }
  }
};

function FooterButton() {
  return (
    <div className={styles.buttonContainer}>
      <motion.button
        className={styles.button}
        variants={footerButton}
        style={{ backgroundColor: 'transparent' }}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/register">
          REGISTER
        </NavLink>
      </motion.button>
      <motion.button
        className={styles.button}
        variants={footerButton}
        style={{ backgroundColor: 'transparent' }}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/bts">
          CONTACT
        </NavLink>
      </motion.button>
    </div>
  );
}

export default FooterButton;
