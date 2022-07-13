import React from 'react';
import Image from 'next/image';
import styles from './WorkProcess.module.scss';
import { RoundedButton } from 'src/commons/Button';
import { PROCESSES, WORKPROCESSDESCRIPTION } from 'src/utils/strings';

const WorkProcess = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.description}>
        <span>HOW WE HANDLE OUR WORK</span>
        <h2>We have the <span>best team</span><br/>and <span>best process</span></h2>
        <p>{WORKPROCESSDESCRIPTION}</p>
      </div>
      <div className={styles.processContainer}>
        {
          PROCESSES.map((process, index) =>(
            <div key={index} className={styles.processCard} style={{backgroundImage: `${process.image}`}}>
              <span>{process.title}</span>
              <p>{process.description}</p>
            </div>
          ))
        }
      </div>
      <div className={styles.btn}>
        <RoundedButton text="Talk to us" />
      </div>      
    </div>
  )
}

export default WorkProcess;