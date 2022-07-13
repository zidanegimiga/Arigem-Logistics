import React from "react";
import Image from 'next/image';
import styles from './TeamCard.module.scss';

const TeamCard = ({src, name, title}) => {
  return (
    <div className={styles.card}>
      <Image src={src} alt="Company Director" width={240} height={240} />
      <h3>{name}</h3>
      <div className={styles.title}>
        <p>{title}</p>
        <span>&rarr;</span>
      </div>
    </div>
  );
};

export default TeamCard;
