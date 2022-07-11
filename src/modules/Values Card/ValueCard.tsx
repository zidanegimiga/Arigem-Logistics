import React from 'react';
import Image from 'next/image';
import styles from './ValueCard.module.scss';

const ValueCard = ({icon, title, description}) => {
  return (
    <div className={styles.card}>
      <div>
        <Image src={icon} alt="icon" width={60} height={60} />
      </div>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ValueCard;