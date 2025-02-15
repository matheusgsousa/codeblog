'use client';
import React, { useState } from 'react';
import styles from './content-container.module.css';
import { Heart } from 'lucide-react';

interface IContentContainer {
  data: string;
  titulo: string;
  conteudo: string;
}
const ContentContainer = (props: IContentContainer) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = () => {
    setIsFilled(!isFilled);
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>{props.data}</div>
        <div className={styles.icon} onClick={handleHeartClick}>
          <Heart color="#e07b67" fill={isFilled ? '#e07b67' : 'none'} />
        </div>
      </header>
      <section className={styles.content}>
        <div>{props.titulo}</div>
        <article>{props.conteudo}</article>
      </section>
    </div>
  );
};

export default ContentContainer;
