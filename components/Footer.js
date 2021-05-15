import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <div>
          <div className={styles.image_container}>
            <img src="/assets/icon/3.jpeg" alt="" />
          </div>
        </div>
        <div>
          MS &copy; {new Date().getFullYear()} Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}
