import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import FooterButton from '../Others/FooterButton/FooterButton';
import { ArrowLeft, ArrowRight } from '../static';
import styles from './Competitions.module.css';

const competitionsVariant = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

function Competitions() {
  const [slide, setSlide] = useState(0);

  const eventHeaderLeft = [
    'MOOD TO DOOD',
    'ART MAESTRO',
    'HUMMING',
    'INNER FLAME',
    'LIT UP',
    'BLINK N CLICK',
    'EUPHONY',
    'SPOTLIGHT'
  ];

  const doodle = [
    'Doodling an image captures the essence of an idea.',
    "You do draw aimlessly but when you don't end up being anything, yes! that can be a doodler in you.",
    "So, here's your chance to doodle your craziest imaginations to the world."
  ];
  const arts = [
    'Art is created, we know, when the hand, the mind and the heart of a person go together.',
    'The more of it we see, the more of it we want to see.',
    'So guys, gear up the artist in you and create arts freely out of your hearts.'
  ];
  const singing = [
    'Music is like a therapy that can take us out of everything else.',
    'At the same time, it makes the communication more stronger and reaches out to people miles away.',
    'So sing your heart out here and be the sensation!'
  ];
  const dance = [
    'The saying "Dance to express,not to impress" holds a strong meaning.',
    'Its more about the way we feel, the same way we move.',
    'So people, lace your dancing shoes and brace them with your performance'
  ];
  const creative = [
    'Writing the untold version of a thing or an emotion makes it more valuable.',
    'You can write your thoughts out in whichever way you want.',
    'So, grab this opportunity and write through your feelings and imaginations.'
  ];
  const photography = [
    'A photograph keeps the moment from running away and captures it forever.',
    'Clicking out the favourite time in pictures, we can relive it again.',
    'So, photograph the moments and save it forever here.'
  ];
  const instrumental = [
    'Where words fail to explain, tunes and music speak it.',
    'It has no lyrics dictating what you should feel, no boundaries of emotion.',
    'So, tune in to express and play your favourite tune here.'
  ];
  const monoacting = [
    'A very interesting art from which evolves both acting as well as intelligence.',
    'Sometimes two is a crowd. So stand tall alone, let the stage be your play-ground as you immerse your soul and delve in the current of emotions.',
    'Seize the moment. You have a few minutes to fame.'
  ];

  const switchSlides = () => {
    switch (slide) {
      case 0:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Doodling</h4>
              {doodle.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Fine Arts</h4>
              {arts.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Solo Singing</h4>
              {singing.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Solo Dance</h4>
              {dance.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Creative Writing</h4>
              {creative.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          </>
        );

      case 5:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Photography</h4>
              {photography.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Instrumental</h4>
              {instrumental.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          </>
        );

      case 7:
        return (
          <>
            <div className={styles.competitionsFlexLeft}>
              <h1>{eventHeaderLeft[slide]}</h1>
            </div>
            <div className={styles.competitionsFlexRight}>
              <h4>Mono Acting</h4>
              {monoacting.map((title) => (
                <h3>{title}</h3>
              ))}
              <div className={styles.compBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
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
            <div className={styles.carouselBlock}>
              <h1>6</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>7</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>8</h1>
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
            <div className={styles.carouselBlock}>
              <h1>6</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>7</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>8</h1>
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
            <div className={styles.carouselBlock}>
              <h1>6</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>7</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>8</h1>
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
            <div className={styles.carouselBlock}>
              <h1>6</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>7</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>8</h1>
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
            <div className={styles.carouselBlock}>
              <h1>6</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>7</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>8</h1>
            </div>
          </div>
        );

      case 5:
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
            <div className={styles.carouselBlock}>
              <h1>5</h1>
            </div>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>6</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>7</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>8</h1>
            </div>
          </div>
        );

      case 6:
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
            <div className={styles.carouselBlock}>
              <h1>5</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>6</h1>
            </div>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>7</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>8</h1>
            </div>
          </div>
        );

      case 7:
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
            <div className={styles.carouselBlock}>
              <h1>5</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>6</h1>
            </div>
            <div className={styles.carouselBlock}>
              <h1>7</h1>
            </div>
            <div className={`${styles.carouselBlock}  ${styles.active}`}>
              <h1>8</h1>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className={styles.competitionsContainer}>
      <motion.div className={styles.competitionsFlex} variants={competitionsVariant} initial="hidden" animate="visible">
        {switchSlides()}
      </motion.div>

      <div
        className={styles.rightArrow}
        onClick={() => {
          if (slide === 7) {
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
            setSlide(7);
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

export default Competitions;
