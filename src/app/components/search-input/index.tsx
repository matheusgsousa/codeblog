import React from 'react';
import styles from './search-input.module.css';

const SearchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  return <input {...props} className={`${styles.search}`} />;
};

export default SearchInput;
