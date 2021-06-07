import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Ofertas from '../components/Ofertas'
import Productos from '../components/Productos'
import Historia from '../components/Historia'
import Contactanos from '../components/Contactanos'
import Redes from '../components/Redes'
import Pago from '../components/Pago'
import Ubicanos from '../components/Ubicanos'

import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mundo Solinca</title>
        <meta name="description" content="Bienvenidos a Mundo Solinca." />
        <link rel="icon" href="./assets/icon/1.jpeg" />
      </Head>

      {/* <Loader loaded={loaded} /> */}

      <Header />
      
      <Hero />

      <main className={styles.main_container}>
        <Historia />
        <Productos />
        <Ofertas/>
        <Contactanos />
        <Redes />
        <Pago />
        <Ubicanos />
      </main>

      <Footer />
    </div>
  )
}
