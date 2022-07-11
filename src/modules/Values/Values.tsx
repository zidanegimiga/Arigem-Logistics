import React from 'react';
import ValueCard from '../Values Card';
import styles from './Values.module.scss';
import { VALUES } from 'src/utils/strings';

const Clients = () => {
  return (
    <div className={styles.sectionWrapper}>
      {
        VALUES?.map((value, index) => (
          <ValueCard
            key={index} 
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))
      }
    </div>
  )
}

export default Clients;