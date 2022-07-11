import React, { useState } from "react";
import Button from "src/commons/Button";
import { Input, TextArea } from "../Form Input";
import styles from './Form.module.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${formData.name}, ${formData.email}, ${formData.message}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.top}>
          <Input
            type="text"
            label="Name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            label="E-mail"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.middle}>
          <TextArea
            label="Message"
            placeholder="Type your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className={styles.bottom}>
          <Button text="SEND MESSAGE"/>
        </div>
      </form>
    </div>
  );
};

export default Form;
