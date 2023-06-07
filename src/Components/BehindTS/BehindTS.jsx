import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import FooterButton from '../Others/FooterButton/FooterButton';
import Social from '../Others/Social/Social';
import styles from './BehindTS.module.css';
import { Creatives, Sponsorship, PR, Competitions } from '../static';

const btsVariant = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

function BehindTS() {
  const headings = ['Sponsorship', 'Competitions', 'Creatives', 'Public Relations'];
  const lefts = [<Sponsorship />, <Competitions />, <Creatives />, <PR />];
  const rights = [
    [
      'Aarohan splendour has been established on the backbone of the trust and backing we receive from our benevolent sponsors, the strenuous job of procuring which is taken care by the very dedicated and conscientious sponsorship team.',
      'Vidit Jha : +91-7258879307',
      'Aryan Ikhar : +91-9340912668'
    ],
    [
      'Aarohan conducts plethora of competitons carved up into four main genres- Dance, Drama, Art and Music.With more than 3500 participants from over 150+ colleges contending for the heavily rewarded cash prizes, competitons at Aarohan is an endeavour to provide a platform to all the individuals to showcase their skills and develop their potential.',
      'Sakshi Shah : +91-9011012677',
      'Tanvi Podder : +91-6264458995'
    ],
    [
      'Aarohan, more than an event, is a fiesta of memories. Each memory more exuberant than the other, while each of it etched to hearts patently. Pictures capture moments, moments evoke memories. Here we have a few moments, and we would want You to take it from here, and descry memories off them',
      'Nimisha Jain  : +91-7038382828'
    ],
    [
      'A bridge that connects Aarohan to you. A group of creative individuals who bring imagination to reality and mould it to be immaculately presented to you through our social media platforms',
      'Shailesh Mohta  : +91-9424023129',
      'Shruti Hanchate  : +91-8806245719 '
    ]
  ];
  return (
    <div className={styles.btsContainer}>
      <motion.div className={styles.heading} variants={btsVariant} initial="hidden" animate="visible">
        <h1>Contact Us</h1>
      </motion.div>
      <motion.div className={styles.outer} variants={btsVariant} initial="hidden" animate="visible">
        <div className={styles.main}>
          {lefts.map((left, index) => (
            <div className={styles.fullbox} key={index}>
              <div className={styles.box}>{left}</div>
              <h4 className={styles.headings} key={index}>
                {headings[index]}
              </h4>
              <div className={styles.matter}>
                <div className={styles.remove}>{rights[index][0]}</div>
                {rights[index][1]}
                <br />
                {rights[index][2] ? rights[index][2] : ''}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <Social />
      <FooterButton />
      <Navbar />
    </div>
  );
}

export default BehindTS;
