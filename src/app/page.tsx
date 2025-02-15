'use client';
import { useState } from 'react';
import ContentContainer from './components/content-container';
import HomeHeader from './components/home-header';
import styles from './page.module.css';

const mockData = [
  {
    data: '17 de ago, 2025',
    titulo: 'O que é linguagem de programação? Conheça as principais',
    conteudo:
      'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
  },
  {
    data: '12 de jul, 2025',
    titulo: 'GitHub agora permite fazer login sem precisar de senha',
    conteudo:
      'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
  },
  {
    data: '21 de jun, 2025',
    titulo: 'Por que os hiperlinks são azuis em sua maioria?',
    conteudo:
      'Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.',
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = mockData.filter(
    (item) =>
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.conteudo.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className={styles.page}>
      <header>
        <HomeHeader onSearch={setSearchTerm} />
      </header>
      <section className={styles.blogContainer}>
        {filteredData.map((item, index) => (
          <article key={index} className={styles.blogContent}>
            <ContentContainer
              data={item.data}
              titulo={item.titulo}
              conteudo={item.conteudo}
            />
          </article>
        ))}
      </section>
    </div>
  );
}
