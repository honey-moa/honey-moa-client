// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import styles from './Home.module.css'; // CSS 모듈을 사용하여 스타일링

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>JSP World</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.page}>
        <header className={`${styles.header} ${styles.themeB}`}>
          <h1>웹 화면구성 기초</h1>
        </header>
        <section className={styles.content}>
          <br />
          <br />
          안녕하세요...202015065 이재진 입니다.
          <br />
          <br />
          <br />
        </section>
        <footer className={`${styles.footer} ${styles.themeA}`}>
          <h3>(주)JSP World 서울시 강남구 역삼동 1234</h3>
        </footer>
      </div>
    </>
  );
};

export default Home;
