import React from 'react';
import Head from 'next/head';

import Navbar from 'src/commons/Navbar';

import styles from '../../styles/Home.module.scss';

const Home =() => {
  return (
    <div className={styles.index}>
      <Head>
        <title>Arigem Logistics</title>
      </Head>
      <Navbar />
    </div>
  )
}

export default Home