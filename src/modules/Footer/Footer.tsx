import React from "react";
import Image from 'next/image';
import logo from '../../../public/logo.png';
import twitter from '../../../public/twitter.svg';
import linkedin from '../../../public/linkedin.svg';
import facebook from '../../../public/facebook.svg';
import styles from './Footer.module.scss';

const Form = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        
        <div className={styles.company}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" width={88.5} height={59} />
            <h3>Arigem Logistics</h3>
          </div>
          <p>Aspire today, Inspire tomorrow.</p>
        </div>
        
        <div className={styles.contact}>
          <h3>Contact Info</h3>
          <p>Tel: +254 722 952 627</p>
          <p>Email: arigemlogistics@gmail.com</p>
          
          <div className={styles.socials}>
            <Image src={twitter} alt="twitter" width={35} height={27}/>
            <Image src={linkedin} alt="linkedin" width={27} height={27}/>
            <Image src={facebook} alt="facebook" width={27} height={27}/>
          </div>
        </div>
        <div className={styles.businessHours}>
          <h3>Business Hours</h3>
          <p>Our support hotline is  available 24 hours a day</p>
          <p>Monday - Friday: 9 a.m - 5 p.m</p>
          <p>Saturday: 9 a.m - 2 p.m</p>
          <p>Sunday: <span>Closed</span></p>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Copyright @ Arigem Logistics. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Form;