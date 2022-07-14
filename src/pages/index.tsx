import React from 'react';
import Head from 'next/head';

import Navbar from 'src/commons/Navbar';
import Hero from 'src/modules/Hero';
import Clients from 'src/modules/Clients';

import styles from '../../styles/Home.module.scss';
import Services from 'src/modules/Services';
import WorkProcess from 'src/modules/Work Process';
import Growth from 'src/modules/Growth';
import Mission from 'src/modules/Mission';
import Values from 'src/modules/Values';
import ContactForm from 'src/modules/Contact Form';
import Footer from 'src/modules/Footer';
import Team from 'src/modules/Team';

const Home =() => {
  return (
    <div className={styles.index}>
      <Head>
        <title>Arigem Logistics</title>
      </Head>
      <Hero />
      <Navbar />
      <Clients />
      <Services />
      <WorkProcess />
      <Growth />
      <Mission />
      <Values />
      <Team />
      {/*<Recommendations />*/}
      <ContactForm /> 
      <Footer /> 
    </div>
  )
}

export default Home;