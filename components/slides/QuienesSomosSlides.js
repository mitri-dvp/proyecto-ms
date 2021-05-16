import styles from '../../styles/slides/QuienesSomosSlides.module.css'

export function Slide1() {
  return (
    <div className={`${styles.container} ${styles.slide_1}`}>
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
    </div>
  )
}

export function Slide2() {
  return (
    <div className={`${styles.container} ${styles.slide_2}`}>
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
    </div>
  )
}
