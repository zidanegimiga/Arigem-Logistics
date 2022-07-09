import React from 'react';
import Image from 'next/image';
import hero from '../../../public/hero-image.png';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.left}>
        <div>
          <h1> We make<br/><span>office supplies </span>the<br/>least of your worries</h1>
          <p>We are among the leading suppliers of office stationery,<br/>furniture and Graphic design solutions. We have partnered with<br/>the leading stationery brands to help fuel organizational<br/>success.</p>
        </div>
        <div className={styles.cta}>
            Let&apos;s talk
        </div>
      </div>
      <div className={styles.right}>
        <Image alt="hero image" src={hero} width={581} height={374}/>
      </div>        
    </div>
  )
}

export default Hero;