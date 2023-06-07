import React from 'react';
import Navbar from '../../Navbar/Navbar';
import FooterButton from '../../Others/FooterButton/FooterButton';
import Social from '../../Others/Social/Social';
import Carousel from '../Carousel/Carousel';
import styles from './GalleryInside.module.css';

function GalleryInside() {
  return (
    <div className={styles.galleryInContainer}>
      <Carousel />
      <Social />
      <FooterButton />
      <Navbar />
    </div>
  );
}

export default GalleryInside;
