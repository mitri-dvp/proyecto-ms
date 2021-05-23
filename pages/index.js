import Head from 'next/head'
import dynamic from 'next/dynamic'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import QuienesSomos from '../components/QuienesSomos'
import Productos from '../components/Productos'
import Contactanos from '../components/Contactanos'
// import Ubicanos from '../components/Ubicanos'

import styles from '../styles/Home.module.css'

export default function Home() {
  const Ubicanos = dynamic(
    () => import('../components/Ubicanos'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )

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
