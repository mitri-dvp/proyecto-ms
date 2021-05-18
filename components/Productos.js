import { useState } from 'react'
import ProductosGaleria from './slides/ProductosGaleria'

import styles from '../styles/Productos.module.css'

export default function Productos() {
  const [selected, setSelected] = useState(1)

  return (
    <section className={styles.productos} id="productos">
      <div className={styles.main}>
        <h1>PRODUCTOS</h1>
        <div className={styles.submenus}>
          <div className={styles.botones}>
            <button className={selected == 1 ? styles.active : ''} onClick={() => setSelected(1)}>Linea 1</button>
            <button className={selected == 2 ? styles.active : ''} onClick={() => setSelected(2)}>Linea 2</button>
            <button className={selected == 3 ? styles.active : ''} onClick={() => setSelected(3)}>Linea 3</button>
            <button className={selected == 4 ? styles.active : ''} onClick={() => setSelected(4)}>Linea 4</button>
            <button className={selected == 5 ? styles.active : ''} onClick={() => setSelected(5)}>Linea 5</button>
          </div>
          <div className={styles.galeria}>
            {selected === 1 && <ProductosGaleria selected={selected}/>}
            {selected === 2 && <ProductosGaleria selected={selected}/>}
            {selected === 3 && <ProductosGaleria selected={selected}/>}
            {selected === 4 && <ProductosGaleria selected={selected}/>}
            {selected === 5 && <ProductosGaleria selected={selected}/>}
          </div>
        </div>
      </div>
    </section>
  )
}
