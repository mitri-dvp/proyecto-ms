import styles from '../styles/Productos.module.css'
import Link from 'next/link'

export default function Productos() {
  return (
    <section className={styles.productos} id="productos">
      <div className={styles.main}>
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
  )
}
