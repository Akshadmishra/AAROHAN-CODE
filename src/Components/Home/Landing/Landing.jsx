import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, SvgTop, SvgBottom, SvgRight } from '../../static';
import styles from './Landing.module.css';
import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';

const landingContent = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

const landingButton = {
  hover: {
    scale: 1.1,
    boxShadow: '2px 1px 2px  rgba(0, 0, 0, 0.4)',
    transition: { type: 'spring', stiffness: 150 }
  },
  tap: {
    scale: '0.9',
    transition: { type: 'spring', stiffness: 300 }
  }
};

function Landing({ modal }) {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.landingTop}>
          <div className={styles.warning}>
            <span>Due to unforseen spread of COVID-19 pandemic, Aarohan 21 will shift to ONLINE fest</span>
          </div>
          <div className={styles.warnBtn}>
            <motion.button className={styles.landingButton} variants={landingButton} whileHover="hover" whileTap="tap">
              <div onClick={() => modal(true)} style={{ textDecoration: 'none', color: '#ff5b52' }}>
                Workshops
              </div>
            </motion.button>
            <motion.button className={styles.landingButton} variants={landingButton} whileHover="hover" whileTap="tap">
              <div onClick={() => modal(true)} style={{ textDecoration: 'none', color: 'white' }}>
                Proshows
              </div>
            </motion.button>
          </div>
        </div>
        <div className={styles.landingNav}>
          <Navbar strokeFill={'#FF5B52'} />
        </div>
        <motion.div
          className={styles.landingFlexContainer}
          variants={landingContent}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.landingFlexLeft}>
            <div>
              <h3>MIT - WPU</h3>
              <h1>AAROHAN '21</h1>
              <h3>The Cultural Fest</h3>
              <p>
                Aarohan is the annual cultural festival of MITWPU and the largest college fest of Pune. Ever since its
                inception in 2014, Aarohan has shown an exponential growth with a plethora of alluring events,
                performances and activities. Aarohan embodies the knack and passion of young potentials from all over
                the country by giving the perfect platform to showcase their talents in a 3 day long fiesta. Aarohan has
                always cast a spell over the audience and have provided absolute entertainment through its competitive
                events and magnificient performances by renowned artists of the country.
              </p>
            </div>
            {/* <div>
              <NavLink to="/">
                <button className={styles.watch}>WATCH US</button>
              </NavLink>
            </div> */}
          </div>
          <div className={styles.FlexRight}>
            <Logo />
            <NavLink to="/">
              <motion.button
                className={styles.landingButton}
                variants={landingButton}
                whileHover="hover"
                whileTap="tap"
              >
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/register">
                  REGISTER
                </NavLink>
              </motion.button>
            </NavLink>
          </div>
        </motion.div>
        <div className={styles.landingTopBox}>
          <SvgTop />
        </div>
        <div className={styles.landingRight}>
          <SvgRight />
        </div>
        <div className={styles.landingBottom}>
          <SvgBottom />
        </div>
      </div>
    </>
  );
}

export default Landing;
