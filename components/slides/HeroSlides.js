import Link from 'next/link'

import styles from '../../styles/slides/HeroSlides.module.css'

export function Slide1() {
  return (
    <div className={`${styles.container} ${styles.slide_1}`}>
      <div>
        <div className={styles.image_container}>
          <img src="/assets/hero-3.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>Bienvenido a <span>Mundo Solinca</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.</p>
          <a href="#contacto">Contacta Ahora</a>
        </div>
      </div>
    </div>
  )
}

export function Slide2() {
  return (
    <div className={`${styles.container} ${styles.slide_2}`}>
      <div>
        <div className={styles.image_container}>
          <img src="/assets/hero-3.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>Reseña de la empresa</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.</p>
          <a href="#contacto">Contacta Ahora</a>
        </div>
      </div>
    </div>
  )
}

export function Slide3() {
  return (
    <div className={`${styles.container} ${styles.slide_1}`}>
      <div>
        <div className={styles.image_container}>
          <img src="/assets/hero-3.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>Misión</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.</p>
          <a href="#contacto">Contacta Ahora</a>
        </div>
      </div>
    </div>
  )
}

export function Slide4() {
  return (
    <div className={`${styles.container} ${styles.slide_2}`}>
      <div>
        <div className={styles.image_container}>
          <img src="/assets/hero-3.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>Visión</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.</p>
          <a href="#contacto">Contacta Ahora</a>
        </div>
      </div>
    </div>
  )
}
export function Slide5() {
  return (
    <div className={`${styles.container} ${styles.slide_1}`}>
      <div>
        <div className={styles.image_container}>
          <img src="/assets/hero-3.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>Valores</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.</p>
          <a href="#contacto">Contacta Ahora</a>
        </div>
      </div>
    </div>
  )
}

export function Slide6() {
  return (
    <div className={`${styles.container} ${styles.slide_2}`}>
      <div>
        <div className={styles.image_container}>
          <img src="/assets/hero-3.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>Políticas</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.</p>
          <a href="#contacto">Contacta Ahora</a>
        </div>
      </div>
    </div>
  )
}
