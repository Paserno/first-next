import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'

import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Paserno</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Navbar />

      <main className={styles.main}>

      <h1>About Page</h1>


        <h1 className={styles.title}>
          {/* Ir al <a href="/">Home</a> */}
          Ir al <Link href="/">Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.jsx</code>
        </p>

        
      </main>

     
    </div>
  )
}
