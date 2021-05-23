import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import QuienesSomos from '../components/QuienesSomos'
import Productos from '../components/Productos'
import Contactanos from '../components/Contactanos'
import Ubicanos from '../components/Ubicanos'

import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Proyecto MS</title>
        <meta name="description" content="Proyecto MS" />
        <link rel="icon" href="./assets/icon/1.jpeg" />
      </Head>

      {/* <Loader loaded={loaded} /> */}

      <Header />
      
      <Hero />

      <main className={styles.main_container}>
        <Productos />
        <QuienesSomos/>
        <Contactanos />
        <Ubicanos />
      </main>

      <Footer />
    </div>
  )
}
