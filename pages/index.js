import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Proyecto MS</title>
        <meta name="description" content="Proyecto MS" />
        <link rel="icon" href="./assets/icon/1.jpeg" />
      </Head>

      <Header />
      <Hero />

      <main className={styles.main_container}>
        <section className={styles.quienes_somos}>
          <div>
            <div className={styles.contenido}>
              <h1>¿Quiénes somos?</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quam minima dolorum esse ratione rem numquam, at error?</p>
              <p>Sed ratione error aliquid aliquam quo, ullam recusandae qui odit. Deserunt doloribus est perspiciatis ab, dolorem ipsa optio fugiat. Tempore, officiis ipsum.</p>
            </div>
            <div className={styles.image_container}>
              <img src="/assets/hero-1.png" alt="" />
            </div>
          </div>
        </section>
        <section className={styles.productos}>
          <div>
            <h1>PRODUCTOS</h1>
            <div className={styles.productos_lista}>
              <div className={styles.productos_item}>
                <div className={styles.image_container}>
                  <img src="/assets/tanque.png" alt="" />
                </div>
                <h1>Tanques</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus distinctio labore tempore.</p>
              </div>
              <div className={styles.productos_item}>
                <div className={styles.image_container}>
                  <img src="/assets/vaso.png" alt="" />
                </div>
                <h1>Vasos</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus distinctio labore tempore.</p>
              </div>
              <div className={styles.productos_item}>
                <div className={styles.image_container}>
                  <img src="/assets/hielera.png" alt="" />
                </div>
                <h1>Hieleras</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus distinctio labore tempore.</p>
              </div>
            </div>
            <Link  href="/products"><a className={styles.ir_a}>ir a productos</a></Link>
          </div>
        </section>
        <section className={styles.productos_destacados}>
          <div>
            <h1>PRODUCTOS DESTACADOS</h1>
            <div className={styles.productos_destacados_lista}>
              <div className={styles.productos_destacados_item}>
                <div className={styles.image_container}>
                  <img src="/assets/hero-4.jpg" alt="" />
                </div>
                <h1>nombre del producto</h1>
                <p>$19.99</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
              </div>
              <div className={styles.productos_destacados_item}>
                <div className={styles.image_container}>
                  <img src="/assets/hero-4.jpg" alt="" />
                </div>
                <h1>nombre del producto</h1>
                <p>$19.99</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
              </div>
              <div className={styles.productos_destacados_item}>
                <div className={styles.image_container}>
                  <img src="/assets/hero-4.jpg" alt="" />
                </div>
                <h1>nombre del producto</h1>
                <p>$19.99</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h1>MÁS VENDIDOS</h1>
          </div>
        </section> */}
      </main>

      <Footer />

    </div>
  )
}
