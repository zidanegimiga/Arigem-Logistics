import React from 'react';
import Image from 'next/image';
import styles from './ServicesCard.module.scss';
import { RoundedButton } from 'src/commons/Button';

const ServicesCard = ({color, number, title, bodyText, image, width, height}) => {
  return (
    <div className={styles.cardContainer} style={{backgroundColor: `${color}`}}>      
      <div className={styles.left}>
        <div>
          <div className={styles.cardHeader}>
            <span>{number}</span>
            <h3>{title}</h3>
          </div>
          <div className={styles.cardImage}>
            <Image src={image} alt={title} width={width} height={height}/>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <p>{bodyText}</p>
        <div> <RoundedButton text="READ MORE"/> </div>
      </div>
    </div>
  )
}

export default ServicesCard;