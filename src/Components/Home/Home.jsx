import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion';
import * as scrollify from 'jquery-scrollify';
import { CatNav, CatBg } from '../static';
import About from './About/About';
import Footer from './Footer/Footer';
import Landing from './Landing/Landing';
import Stats from './Stats/Stats';
import SocialCause from './SocialCause/SocialCause';
import Sidebar from './Sidebar/Sidebar';
import styles from './Home.module.css';

function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const [modal, setModal] = useState(true);
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 900) {
      scrollify({
        section: '.panel',
        scrollbars: false,
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        updateHash: false,
        touchScroll: true,
        before: function (index) {
          setPage(index);
        }
      });

      return () => scrollify.destroy();
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      {modal && (
        <>
          <div className={styles.bgOverlay} />
          <div className={styles.homeModal}>
            <div onClick={() => setModal(false)} className={styles.closeModal}>
              &#10006;
            </div>
            <h1>Register Now On The Links Below!!</h1>
            <h3>Workshops</h3>
            <div className={styles.links}>
              <a href="https://forms.gle/CnQ2PeHXXCDNSTUh6"> &nbsp;&nbsp;&nbsp;&nbsp; Poetry</a>
              <a href="https://forms.gle/bmmpeyqPHVi6inCG8">&nbsp;&nbsp;&nbsp;&nbsp; Dance</a>
              <a href="https://forms.gle/dMwLgBdkWPFrjrpN8">&nbsp;&nbsp; Mandala</a>
            </div>

            <h3>Pro Shows</h3>
            <div className={styles.links}>
              <a href="https://forms.gle/HbcKhupzdjuEPC1v8">Comedy Nite</a>
              <a href="https://forms.gle/WJ9XpC1ovcYKmX9k6">Magic/Mentalist</a>
              <a href="https://forms.gle/yP3C9Z5tkt7Arwyu9">Influencer Talk</a>
            </div>

            <h3>Valorant Tournament</h3>
            <div className={styles.valLinks}>
              <a href="https://forms.gle/u1zf71QWw56Den966">Valorant</a>
            </div>
          </div>
        </>
      )}
      {/* Progress Icon */}
      <div className={styles.progressIcon}>
        <svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1 // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </div>
      {/* Home Page */}
      <section className="panel">
        <Landing modal={setModal} />
      </section>
      <section className="panel">
        <About />
      </section>
      <section className="panel">
        <Stats />
      </section>
      <section className="panel">
        <SocialCause />
      </section>
      <section className="panel">
        <Footer scrollify={scrollify} />
      </section>
      <Sidebar page={page} scrollify={scrollify} />
    </div>
  );
}

export default Home;
