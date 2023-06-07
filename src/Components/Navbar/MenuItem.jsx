import * as React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { Website, Contact, Solution, Image_Gallery, Trophy, Home } from '../static';
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF', '#9C1AFF'];
const icon = [
  <Home className={styles.icon} />,
  <Trophy className={styles.icon} />,
  <Image_Gallery className={styles.icon} />,
  <Solution className={styles.icon} />,
  <Website className={styles.icon} />,
  <Contact className={styles.icon} />
];
const item = ['Home', 'Competitions', 'Gallery', 'Sponsors', 'Registration', 'Contact Us'];
const links = ['/', '/competitions', '/gallery', '/sponsors', '/register', '/bts'];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className={styles.iconPlaceholder} style={style}>
        {icon[i]}
      </div>
      <NavLink style={{ textDecoration: 'none', color: 'black' }} to={links[i]}>
        <div className={styles.textPlaceholder}>{item[i]}</div>
      </NavLink>
    </motion.li>
  );
};
