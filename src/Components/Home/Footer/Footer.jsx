import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterButton from '../../Others/FooterButton/FooterButton';
import Social from '../../Others/Social/Social';
import styles from './Footer.module.css';

function Footer({ scrollify }) {
  const moveTo = (i) => (e) => {
    e.preventDefault();
    scrollify.move(i);
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerFlexContainer}>
        <div className={styles.footerFlexLeft}>
          <div className={styles.footerFlexLeftLeft}>
            <h1>LINKS</h1>
            <p onClick={moveTo(0)}>Home</p>
            <p onClick={moveTo(1)}>About</p>
            <p onClick={moveTo(2)}>Statistics</p>
            <p onClick={moveTo(3)}>Social Cause</p>
          </div>
          <div className={styles.footerFlexLeftRight}>
            <NavLink style={{ textDecoration: 'none' }} to="/gallery">
              <p>Gallery</p>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/sponsors">
              <p>Sponsors</p>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/register">
              <p>Register</p>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/bts">
              <p>Contact Us</p>
            </NavLink>
          </div>
        </div>
        <div className={styles.footerFlexRight}>
          <h1>FOLLOW US</h1>
          <a style={{ textDecoration: 'none' }} href="https://www.instagram.com/mitaarohanfest/?hl=en">
            <p>Instagram</p>
          </a>
          <a style={{ textDecoration: 'none' }} href="https://twitter.com/mitaarohanfest?lang=en">
            <p>Twitter</p>
          </a>
          <a style={{ textDecoration: 'none' }} href="https://www.facebook.com/aarohanfest/">
            <p>Facebook</p>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.linkedin.com/company/mit-wpu-aarohan-the-cultural-fest/?originalSubdomain=in"
          >
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
      <p className={styles.footerCopy}>
        Created & Designed By
        <a className={styles.footerAnchor} href="https://www.freeloader.tech" rel="noopener noreferrer" target="_blank">
          Freeloader
        </a>
        &copy; 2020
      </p>
      <Social />
      <FooterButton />
    </div>
  );
}

export default Footer;
