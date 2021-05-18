import { useRouter } from 'next/router'

import styles from '../styles/Header.module.css'

export default function Header() {

  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <header className={`${styles.container} ${isHome ? styles.home : ''}`}>
      <nav>
        <div className={styles.logo}>
          <img src="/assets/icon/1.jpeg" alt="" />
        </div>
        <ul>
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#productos">productos</a></li>
          <li><a href="#quienes_somos">quiénes somos</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
