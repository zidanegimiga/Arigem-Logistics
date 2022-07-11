import React from "react";
import styles from './FormInput.module.scss';

export const Input = ({name, label, type, placeholder, value, onChange}) => {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <label htmlFor={name}>
          {label}
        </label>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </fieldset>
    </div>
  );
};

export const TextArea = ({name, label, placeholder, value, onChange}) => {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <label  htmlFor={name}>
          {label}
        </label>
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </fieldset>
    </div>
  );
};