import React from 'react';
import Image from 'next/image';
import { RoundedButton } from 'src/commons/Button';
import {SERVICEDESCRIPTION} from '../../utils/strings';
import styles from './ServicesCard.module.scss';

const ServicesCard = ({color, number, title, bodyText, image, width, height}) => {
  return (
    <div className={styles.cardContainer} style={{backgroundColor: `${color}`}}>
      <div className={styles.cardHeader}>
        <span>{number}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardImage}>
        <Image src={image} alt={title} width={width} height={height}/>
      </div>
      <div className={styles.cardDescription}>
        {bodyText}
      </div>
      <button className={styles.button}>READ MORE</button>
    </div>
  )
}

export default ServicesCard;