import React from 'react';
import { RoundedButton } from 'src/commons/Button';
import {SERVICEDESCRIPTION, SERVICECARDS} from '../../utils/strings';
import styles from './Services.module.scss';
import ServicesCard from '../Services Card';

const Services = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.description}>
          <span>WHAT WE CAN DO FOR YOU</span>
          <h2>We have a wide array of specialised services</h2>
          <p>{SERVICEDESCRIPTION}</p>
      </div>
      <RoundedButton text="Talk to us" />
      <div className={styles.cardsWrapper}>
        {
          SERVICECARDS.map((card, index) =>(
            <ServicesCard
              key={index} 
              color={card.color}
              number={card.number}
              title={card.title}
              bodyText={card.bodyText}
              image={card.image}
              width={card.width}
              height={card.height}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Services;