import React from 'react';
import styles from '../styles/utils.module.css'; // Import your CSS module

const TextInput = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={styles.textInput} // Apply the CSS class
    />
  );
};

export default TextInput;