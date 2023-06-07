import React, { useEffect, useRef } from 'react';

import styles from './BadTurn.module.css';

function BadTurn({ history }) {
  const container = useRef();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 5000);
    let max = 0;
    const createStars = () => {
      if (max >= 0 && max < 30) {
        max++;
        const runStar = () => {
          if (right >= window.innerWidth) {
            star.remove();
            max--;
          } else {
            right += 3;
            star.style.right = right + 'px';
            setTimeout(runStar, 10);
          }
        };

        let right = Math.random() * 500;
        const top = Math.random() * window.innerHeight;
        const star = document.createElement('div');
        star.classList.add(styles.star);
        if (container.current) container.current.appendChild(star);
        setTimeout(runStar, 10);
        star.style.top = top + 'px';
      }
    };

    const starrySky = setInterval(createStars, 100);

    return () => {
      clearInterval(starrySky);
    };
  }, []);

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.text}>
        <div className={styles.header}>ERROR</div>
        <h1 className={styles.header}>404</h1>
        <hr />
        <div className={styles.notfound}>Page Not Found</div>
      </div>

      <div layout="true" className={styles.astronaut}>
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt="Starry Sky"
          className={styles.src}
          layout="true"
        />
      </div>
    </div>
  );
}

export default BadTurn;
