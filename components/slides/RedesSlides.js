import styles from '../../styles/slides/RedesSlides.module.css'

export function Slide1() {
  return (
    <div className={`${styles.container}`}>
      <div>
        <div className={styles.contenido}>
          <h1>Imagen de Redes</h1>
          <div className={styles.image_container}>
            <img src="./assets/socials/instagram-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
