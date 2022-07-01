import styles from './PageLayout.module.css'
import Head from 'next/head'
import { ReactNode } from 'react'
import Navbar from '@components/Navbar'
import Socials from '@components/Socials'

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
   <div className={styles.pageLayout}>
      <Head>
         <title>Cozinha de Nutri - Comida de Verdade!</title>
         <meta name="description" content="Marmitas feitas com muito amor." />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <header><Navbar /></header>
      <main className={styles.pageContainer}>
         {children}
         <Socials />
         </main>
   </div>
)
export default PageLayout