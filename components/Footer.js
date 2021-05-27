import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <div className={styles.top}>
          <div className={styles.image_container}>
            <img src="/assets/icon/3.jpeg" alt="" />
          </div>
          <div className={styles.columns}>
            <div>
              <div className={styles.title}>Síguenos</div>
              <div className={styles.content}>
                <div><img src="/assets/socials/facebook-icon.svg" alt="facebook-icon.svg" />
                <a href="https://www.facebook.com/">Facebook</a></div>
                <div><img src="/assets/socials/twitter-icon.svg" alt="twitter-icon.svg" />
                <a href="https://www.twitter.com/">Twitter</a></div>
                <div><img src="/assets/socials/instagram-icon.svg" alt="instagram-icon.svg" />
                <a href="https://www.instagram.com/">Instagram</a></div>
              </div>
            </div>
            <div>
              <div className={styles.title}>Dirección</div>
              <div className={styles.content}>Prolongación Circunvalación No. 2 con Av. 16 Guajira, al lado de la Plaza de Toros.</div>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          Mundo Solinca &copy; {new Date().getFullYear()} Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}
