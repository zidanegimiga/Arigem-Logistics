import React from 'react';
import { GROWTHFIGURES } from 'src/utils/strings';
import styles from './Growth.module.scss';

const Growth = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.description}>
        <p>OUR HUMBLE GROWTH</p>
        <h2>Arigem in numbers</h2>
      </div>
      <div className={styles.growthCard}>
        {
          GROWTHFIGURES.map((growth, index) => (
            <div key={index} className={styles.growth}>
              <span>{growth.figures}</span>
              <p>{growth.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Growth;