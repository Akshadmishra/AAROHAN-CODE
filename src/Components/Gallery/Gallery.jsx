import React from 'react';
import styles from './Gallery.module.css';
import { GalleryHand } from '../static';
import { NavLink } from 'react-router-dom';
import Social from '../Others/Social/Social';
import FooterButton from '../Others/FooterButton/FooterButton';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const galleryVariant = {
  hidden: { x: '-100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryFlexContainer}>
        <motion.div
          className={styles.galleryContainerLeft}
          variants={galleryVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.galleryHeader}>GALLERY</h1>
          <h2>
            Aarohan, more than an event, is a fiesta of memories. Each memory more exuberant than the other, while each
            of it etched to hearts patently. Pictures capture moments, moments evoke memories. Here we have a few
            moments, and we would want You to take it from here, and descry memories off them.
          </h2>
          <NavLink to="/galleryin">
            <button className={styles.galleryButton}>Go To Gallery</button>
          </NavLink>
        </motion.div>
        <div className={styles.galleryContainerRight}>
          <GalleryHand />
        </div>
      </div>
      <Social />
      <FooterButton />
      <Navbar />
    </div>
  );
}

export default Gallery;
