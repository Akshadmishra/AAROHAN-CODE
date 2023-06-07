import { motion } from 'framer-motion';
import React from 'react';

import styles from './Sidebar.module.css';

const data = ['Home', 'About Us', 'Statistics', 'Social Cause', 'Follow Us'];
// const chosen = 1;

const sidebarVariant = {
  hidden: { x: '-100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

const marginals = [-0.32, 3.31, 6.93, 10.54, 14.18];

const color = [
  ['#FF5B52', 'rgb(0, 0, 0)', '#FF5B52'],
  ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
  ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
  ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
  ['#FFFFFF', '#FFFFFF', '#FFFFFF']
];

function Sidebar({ page, scrollify }) {
  const handlePage = (i) => (e) => {
    e.preventDefault();
    scrollify.move(i);
  };

  const generateElems = (e, i) => {
    return (
      <motion.div layout="true" className={styles.sideElem} key={i} onClick={handlePage(i)}>
        <motion.div
          style={{ backgroundColor: color[page][0] }}
          className={`${styles.circle} ${i === page ? styles.chosenCircle : null}`}
        ></motion.div>
        <motion.div
          layout="true"
          style={{ color: color[page][1] }}
          className={`${styles.link} ${i === page ? styles.chosenLink : null}`}
        >
          {e}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSec}>
        <div className={styles.ruler} style={{ borderLeft: `2px dotted ${color[page][2]}` }}></div>
        <motion.div
          layout="true"
          className={styles.stalker}
          style={{ marginTop: `${marginals[page]}rem` }}
        ></motion.div>
        {data.map((e, i) => generateElems(e, i))}
      </div>
    </div>
  );
}

export default Sidebar;
