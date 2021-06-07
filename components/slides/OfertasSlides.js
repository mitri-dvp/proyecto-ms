import styles from '../../styles/slides/OfertasSlides.module.css'

export function Slide1() {
  return (
    <div className={`${styles.container}`}>
      <div>
        <div className={styles.contenido}>
          <h1>Imagen de Oferta</h1>
          <div className={styles.image_container}>
            <img src="/assets/hero-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
