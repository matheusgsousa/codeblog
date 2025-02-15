import React, { useState } from 'react';
import styles from './home-header.module.css';
import SearchInput from '../search-input';

interface HomeHeaderProps {
  onSearch: (value: string) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <div className={styles.container}>
      <h1>
        <span style={{ color: '#e07b67' }}>Code</span>
        <span style={{ color: '#fff' }}>Blog</span>
      </h1>
      <SearchInput
        placeholder="Pesquisar no blog"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default HomeHeader;
