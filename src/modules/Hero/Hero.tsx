import React from 'react';
import Image from 'next/image';
import Navbar from 'src/commons/Navbar';
import hero from '../../../public/hero-image.png';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.left}>
          <div className={styles.heroText}>
            <h1><span>Office supplies </span><br/>will be the least of your worries.<br/>Only with Arigem</h1>
            <p>We are among the leading suppliers of office stationery,<br/>furniture and Graphic design solutions.</p>
          </div>
          <div className={styles.cta}>
              Let&apos;s talk
          </div>
        </div>
        <div className={styles.right}>
          <Image alt="hero image" src={hero} width={581} height={374}/>
        </div>        
      </div>
    </div>
  )
}

export default Hero;