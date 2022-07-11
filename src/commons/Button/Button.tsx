import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <button type="submit" className={styles.button}>{text}</button>
  )
}

export const RoundedButton = ({text}) =>{
  return(
    <div className={styles.roundedButton}>{text}</div>
  )
}

export default Button