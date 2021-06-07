import { useState } from 'react'
import ProductosGaleria from './slides/ProductosGaleria'

import styles from '../styles/Productos.module.css'

export default function Productos() {
  const [transition, setTransition] = useState(false)
  const [selected, setSelected] = useState(1)
  const [button, setButton] = useState(1)

  const changeGallery = (n) => {
    if(transition) return
    setTransition(true)
    setButton(n)
    setTimeout(() => {
      setSelected(n)
    }, 100);
    setTimeout(() => {
      setTransition(false)
    }, 500);

  }

  return (
    <section className={styles.productos} id="productos">
      <div className={styles.main}>
        <h1>PRODUCTOS</h1>
        <div className={styles.submenus}>
          <div className={styles.botones}>
          </div>
          <div className={styles.galeria}>
            <h1>POP</h1>
            <div className={styles.desktop_gallery}>
              <ProductosGaleria selected={1} slides={4} variant={'desktop'} />
            </div>
          </div>
          <div className={styles.galeria}>
            <h1>Anthea</h1>
            <div className={styles.desktop_gallery}>
              <ProductosGaleria selected={2} slides={4} variant={'desktop'} />
            </div>
          </div>
          <div className={styles.galeria}>
            <h1>Tanques</h1>
            <div className={styles.desktop_gallery}>
              <ProductosGaleria selected={3} slides={4} variant={'desktop'} />
            </div>
          </div>
          <div className={styles.galeria}>
            <h1>Camarón</h1>
            <div className={styles.desktop_gallery}>
              <ProductosGaleria selected={4} slides={4} variant={'desktop'} />
            </div>
          </div>
          <div className={styles.galeria}>
            <h1>BioNET</h1>
            <div className={styles.desktop_gallery}>
              <ProductosGaleria selected={5} slides={4} variant={'desktop'} />
            </div>
          </div>
            <div className={styles.tablet_gallery}>
              {selected === 1 && <ProductosGaleria selected={selected} slides={2} variant={'tablet'} />}
              {selected === 2 && <ProductosGaleria selected={selected} slides={2} variant={'tablet'} />}
              {selected === 3 && <ProductosGaleria selected={selected} slides={2} variant={'tablet'} />}
              {selected === 4 && <ProductosGaleria selected={selected} slides={2} variant={'tablet'} />}
              {selected === 5 && <ProductosGaleria selected={selected} slides={2} variant={'tablet'} />}
            </div>
            <div className={styles.mobile_gallery}>
              {selected === 1 && <ProductosGaleria selected={selected} slides={2} variant={'mobile'} />}
              {selected === 2 && <ProductosGaleria selected={selected} slides={2} variant={'mobile'} />}
              {selected === 3 && <ProductosGaleria selected={selected} slides={2} variant={'mobile'} />}
              {selected === 4 && <ProductosGaleria selected={selected} slides={2} variant={'mobile'} />}
              {selected === 5 && <ProductosGaleria selected={selected} slides={2} variant={'mobile'} />}
            </div>
          </div>
        </div>
    </section>
  )
}


function Transition() {
    return <div className={styles.gallery_transition}></div>
}