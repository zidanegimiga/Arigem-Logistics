import React from 'react';
import styles from './Mission.module.scss';

const Clients = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.top}>
        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>Our mission is to serve an efficient and effective office equipment service provider, meet and surpass our client expectations . We intend to offer our clients the ultimate satisfactory service at competitive prices without compromising on our quality standards.</p>
        </div>                
        <div className={styles.section}>
          <h2>Our Vision</h2>
          <p>To become a one-stop company for all product needs. Be at the forefront of excellent service delivery when it comes to offering office solutions, branding and design.</p>
        </div>
      </div>
      <div className={styles.section}>
        <h2 style={{textAlign: "center"}}>Our Values</h2>
        <p style={{textAlign: "center", justifyContent: "center", margin: "auto"}}>To realise it’s vision, the company upholds the following values as a guideline to its
operation and business transactions:</p>
      </div>                 
    </div>
  )
}

export default Clients;