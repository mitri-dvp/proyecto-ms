import { useState } from 'react'
import ProductosSlides from './slides/ProductosSlides'

import styles from '../styles/Productos.module.css'

// QUE HACER.
// Poner 5 Submenus pora las 5 líneas donde
// cada línea tenga una galeria de imágenes

// -recomendacion-
// Crear 5 botones (Linea1, Linea2 ...) que
// al darle click (onClick) revele el menu
// correspondiente y oculte el que estaba


export default function Productos() {
  const [selected, setSelected] = useState(1)


  return (
    <section className={styles.productos} id="productos">
      <div className={styles.main}>
        <h1>PRODUCTOS</h1>
        <div className={styles.submenus}>
          <div className={styles.botones}>
            <button onClick={() => setSelected(1)}>Linea 1</button>
            <button onClick={() => setSelected(2)}>Linea 2</button>
            <button onClick={() => setSelected(3)}>Linea 3</button>
            <button onClick={() => setSelected(4)}>Linea 4</button>
            <button onClick={() => setSelected(5)}>Linea 5</button>
          </div>
          <div className={styles.galeria}>
            {selected === 1 && <ProductosSlides />}
            {selected === 2 && '2'}
            {selected === 3 && '3'}
            {selected === 4 && '4'}
            {selected === 5 && '5'}
          </div>
        </div>
      </div>
    </section>
  )
}
