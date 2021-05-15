import Link from 'next/link'

import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image_container}>
          <img src="/assets/hero-3.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>Bienvenido a <span>MS</span></h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <Link href="/contact"><a>Contacta Ahora</a></Link>
        </div>
      </div>
    </div>
  )
}
