import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import FooterButton from '../Others/FooterButton/FooterButton';
import { ArrowLeft, ArrowRight } from '../static';
import styles from './Events.module.css';

const eventsVariant = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

function Events() {
  const [slide, setSlide] = useState(0);

  const eventHeaderLeft = ['INFORMALS STREETS & LOUNGES', 'ART MAESTRO', 'DANCE', 'FOOTBALL', 'DIGITAL ART'];
  const eventContentLeft = [
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.'
  ];
  const eventHeaderRight = ['Food Stalls', 'ART MAESTRO', 'DANCE', 'FOOTBALL', 'DIGITAL ART'];
  const eventContentRight = [
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.',
    'Ln faucibus et molestie ac. In fermentum posuere urna nec. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sed libero enim sed faucibus.'
  ];
  const switchSlides = () => {
    switch (slide) {
      case 0:
        return (
          <>
            <div className={styles.eventsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
              <h3>{eventContentLeft[slide]}</h3>
            </div>
            <div className={styles.eventsFlexRight}>
              <h4>GENRES</h4>
              {eventHeaderRight.map((title, index) => (
                <>
                  <h1>{title}</h1>
                  <h3>{eventContentRight[index]}</h3>
                </>
              ))}
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className={styles.eventsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
              <h3>{eventContentLeft[slide]}</h3>
            </div>
            <div className={styles.eventsFlexRight}>
              <h4>GENRES</h4>
              {eventHeaderRight.map((title, index) => (
                <>
                  <h1>{title}</h1>
                  <h3>{eventContentRight[index]}</h3>
                </>
              ))}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles.eventsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
              <h3>{eventContentLeft[slide]}</h3>
            </div>
            <div className={styles.eventsFlexRight}>
              <h4>GENRES</h4>
              {eventHeaderRight.map((title, index) => (
                <>
                  <h1>{title}</h1>
                  <h3>{eventContentRight[index]}</h3>
                </>
              ))}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.eventsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
              <h3>{eventContentLeft[slide]}</h3>
            </div>
            <div className={styles.eventsFlexRight}>
              <h4>GENRES</h4>
              {eventHeaderRight.map((title, index) => (
                <>
                  <h1>{title}</h1>
                  <h3>{eventContentRight[index]}</h3>
                </>
              ))}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className={styles.eventsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
              <h3>{eventContentLeft[slide]}</h3>
            </div>
            <div className={styles.eventsFlexRight}>
              <h4>GENRES</h4>
              {eventHeaderRight.map((title, index) => (
                <>
                  <h1>{title}</h1>
                  <h3>{eventContentRight[index]}</h3>
                </>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };
  const switchBlock = () => {
    switch (slide) {
      case 0:
        return (
          <div className={styles.carouselSelector}>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>1</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>2</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>3</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>4</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>5</h1>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={styles.carouselSelector}>
            <div className={styles.carouselBlock}>
              <h1>1</h1>
            </div>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>2</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>3</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>4</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>5</h1>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.carouselSelector}>
            <div className={styles.carouselBlock}>
              <h1>1</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>2</h1>
            </div>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>3</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>4</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>5</h1>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.carouselSelector}>
            <div className={styles.carouselBlock}>
              <h1>1</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>2</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>3</h1>
            </div>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>4</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>5</h1>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.carouselSelector}>
            <div className={styles.carouselBlock}>
              <h1>1</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>2</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>3</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>4</h1>
            </div>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>5</h1>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className={styles.eventsContainer}>
      <motion.div className={styles.eventsFlex} variants={eventsVariant} initial="hidden" animate="visible">
        {switchSlides()}
      </motion.div>

      <div
        className={styles.rightArrow}
        onClick={() => {
          if (slide === 4) {
            setSlide(0);
          } else setSlide((prevSlide) => prevSlide + 1);
        }}
      >
        <ArrowRight />
      </div>
      <div
        className={styles.leftArrow}
        onClick={() => {
          if (slide === 0) {
            setSlide(4);
          } else setSlide((prevSlide) => prevSlide - 1);
        }}
      >
        <ArrowLeft />
      </div>
      {switchBlock()}
      <FooterButton />
      <Navbar />
    </div>
  );
}

export default Events;
