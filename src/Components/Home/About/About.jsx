import React from 'react';
import Navbar from '../../Navbar/Navbar';
import FooterButton from '../../Others/FooterButton/FooterButton';
import Social from '../../Others/Social/Social';

import { Logo, RetroRadio } from '../../static';

import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* <Logo className={styles.logo} />
      <div className={styles.header}>
        <h1>About Us</h1>
      </div> */}
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutContainerLeft}>
          <RetroRadio />
        </div>
        <div className={styles.aboutContainerRight}>
          <h1 className={styles.aboutHeader}>ABOUT US</h1>
          <h2>
            Maharashtra Institute of Technology, Pune has been a pioneering education institute for over 34 years.
            Ranked today as one of the top engineering institutes of the country, it has produced world class engineers
            and leaders who have gone on to scale great heights in various fields. The continual buzz of student
            activities, clubs and associations around the campus never ceases to encourage students to create, innovate
            and chase their passion. Aarohan, the annual cultural festival of MIT WPU, Pune was started in the year 2014
            by a group of passionate individuals of the MIT College of Engineering. With a multitude of events,
            performances and activities, Aarohan has never failed to cast a spell over the audience. Aarohan has played
            host to a number of artists including India's Got Talent Fame Vivek Patil & Rishikesh Potdar, Comedy Nights
            by popular standup comedians such as Vipul Goyal, Piyush Sharma, Nishant Suri, Azeem Banatwalla and Rajat
            Sood, splendid performances by The Local Train-an Indian Hindi rock band from Delhi, famous bollywood
            playback singers like Papon and Nikhil D'Souza. The fest stands apart as a solely student driven fest of
            soaring spirits, reaching new heights each year.
          </h2>
        </div>
      </div>
      <Social />
      <FooterButton />
      <Navbar />
    </div>
  );
}

export default About;
