import React from 'react'
import styles from './Button.module.scss';

const Button = () => {
  return (
    <div className={styles.button}>Contact us</div>
  )
}

export const RoundedButton = ({text}) =>{
  return(
    <div className={styles.roundedButton}>{text}</div>
  )
}

export default Button