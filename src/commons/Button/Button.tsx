import React from 'react'
import styles from './Button.module.scss';

const Button = ({text, type}) => {
  return (
    <button type={type} className={styles.button}>{text}</button>
  )
}

export const RoundedButton = ({text}) =>{
  return(
    <div className={styles.roundedButton}>{text}</div>
  )
}

export default Button