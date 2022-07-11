import React from 'react';
import Form from '../Form';
import styles from './Contact.module.scss';

const ContactForm = () => {
return (
    <div className={styles.sectionWrapper}> 
      <div className={styles.description}>
        <span>HAVE SOME QUESTIONS?</span>
        <h1>Talk to us. Let us spruce up your office space</h1>
        <p>Send us a message and we will get back to you promptly</p>
      </div>                
      <div className={styles.formContainer}>
        <Form />
      </div>                
    </div>
  )
}

export default ContactForm;