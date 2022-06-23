import Navbar from '@components/Navbar'
import Head from 'next/head'
import { ReactNode } from 'react'
import styles from './PageLayout.module.css'

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
   <div className={styles.pageLayout}>
      <Head>
         <title>Cozinha de Nutri</title>
         <meta name="description" content="Marmitas feitas com muito amor." />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <header><Navbar /></header>
      <main className={styles.pageContainer}>{children}</main>
   </div>
)
export default PageLayout
