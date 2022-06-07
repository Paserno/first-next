import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar'


import styles from './MainLayout.module.css'

type FuncionProps = {
  children: React.ReactNode
}

export const MainLayout: FC <FuncionProps> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Paserno</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
            <Navbar />
    
    
          <main className={styles.main}>
    
           { children }
    
            
          </main>
    
         
        </div>
      )
}
