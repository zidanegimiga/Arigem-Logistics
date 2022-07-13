import React from 'react';
import Image from 'next/image';
import hero from '../../../public/hero-image.png';
import styles from './Clients.module.scss';
import clientsLogos from '../../utils/clientsLogos';

const Clients = () => {
  return (
    <div className={styles.sectionWrapper}> 
      <h3 className={styles.sectionTitle}>Over 32 businesses trusted and are growing with ARIGEM</h3>
      <div className={styles.imageWrapper}>
        {
          clientsLogos?.map((client) =>(
            <div key={client.id} className={styles.image}>
              <Image src={client.path} alt={client.alt} width={client.width} height={client.height}/>
            </div>
          ))
        }
      </div>          
    </div>
  )
}

export default Clients;