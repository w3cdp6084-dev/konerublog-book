import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from '../../styles/common.module.scss';
export default function Layout({ children }) {
  return (
    <>
    <Header />
      <main className={styles.mainWrap}>{children}</main>
    <Footer />
    </>
  );
}
