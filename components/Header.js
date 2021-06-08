import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useScrollPosition } from '../hooks/useScrollPosition.tsx'

import styles from '../styles/Header.module.css'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [fixed, setFixed] = useState(false)
    const [date, setDate] = useState('');
 
  useEffect(() => {
    const interval = setInterval(
      () => {
        const dateObj = new Date()
        const date_options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        const time_options = { hour12: true, hour: '2-digit', minute: '2-digit' };
        const date_format = dateObj.toLocaleDateString('es-ES', date_options).slice(6)
        const time_format = dateObj.toLocaleTimeString('es-ES', time_options)
        setDate(`maracaibo, ${date_format}, ${time_format}`.toUpperCase())
      },
      1000
    );

 
    return () => {
      clearInterval(interval);
    }
  }, []);

  useScrollPosition(({ currPos }) => {
    if((currPos.y*-1) > window.innerHeight - 80) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  })

  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <header className={`${styles.container} ${isHome ? styles.home : ''}`}>
      <nav>
        <div className={styles.logo}>
          <img src="/assets/icon/1.jpeg" alt="" />
        </div>
        <ul className={styles.desktop_list}>
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#historia">historia</a></li>
          <li><a href="#productos">productos</a></li>
          <li><a href="#ofertas">ofertas</a></li>
          <li><a href="#contacto">contacto</a></li>
          <li><a href="#redes">redes</a></li>
          <li><a href="#pago">pago</a></li>
          <li><a href="#ubicanos">ubicanos</a></li>
          <div className={styles.date}>
            {date}
          </div>
        </ul>
        <div className={styles.mobile_list}>
          <div className={styles.burger} onClick={() => setMobileMenu(!mobileMenu)}>
            <img src="/assets/burger.svg" alt="" />
          </div>
          <ul className={mobileMenu ? styles.active : ' '}>
            <li><a href="#inicio">inicio</a></li>
            <li><a href="#historia">historia</a></li>
            <li><a href="#productos">productos</a></li>
            <li><a href="#ofertas">ofertas</a></li>
            <li><a href="#contacto">contacto</a></li>
            <li><a href="#redes">redes</a></li>
            <li><a href="#pago">pago</a></li>
            <div className={styles.date}>
              {date}
            </div>
          </ul>
        </div>
      </nav>
      <div className={`${styles.fixed} ${fixed ? styles.active : ' '}`}>
        <nav>
          <div className={styles.logo}>
            <img src="/assets/icon/1.jpeg" alt="" />
          </div>
          <ul className={styles.desktop_list}>
            <li><a href="#inicio">inicio</a></li>
            <li><a href="#historia">historia</a></li>
            <li><a href="#productos">productos</a></li>
            <li><a href="#ofertas">ofertas</a></li>
            <li><a href="#contacto">contacto</a></li>
            <li><a href="#redes">redes</a></li>
            <li><a href="#pago">pago</a></li>
            <li><a href="#ubicanos">ubicanos</a></li>
            <div className={styles.date}>
              {date}
            </div>
          </ul>
        </nav>
        </div>
    </header>
  )
}
