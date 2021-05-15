import Link from 'next/link'
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
          <li><Link href="/"><a>inicio</a></Link></li>
          <li><Link href="#"><a>sobre nosotros</a></Link></li>
          <li><Link href="/products"><a>productos</a></Link></li>
          <li><Link href="#"><a>contacto</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}
