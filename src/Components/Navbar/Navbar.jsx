import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import styles from './Navbar.module.css';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 260px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const Navbar = ({ strokeFill }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [flow, hideFlow] = useState(false);

  useEffect(() => {
    isOpen && hideFlow(true);
    setTimeout(() => {
      isOpen === false && hideFlow(false);
    }, 1000);
    return () => {
      clearTimeout();
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={flow === false && `${styles.disable}`}
    >
      <motion.div className={styles.background} variants={sidebar} />
      <MenuToggle toggle={() => toggleOpen()} strokeFill={strokeFill} />
      <Navigation />
    </motion.nav>
  );
};

export default Navbar;
