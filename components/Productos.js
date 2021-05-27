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
            <button className={button == 1 ? styles.active : ''} onClick={() => changeGallery(1)}>POP</button>
            <button className={button == 2 ? styles.active : ''} onClick={() => changeGallery(2)}>Anthea</button>
            <button className={button == 3 ? styles.active : ''} onClick={() => changeGallery(3)}>Tanques</button>
            <button className={button == 4 ? styles.active : ''} onClick={() => changeGallery(4)}>Camarón</button>
            <button className={button == 5 ? styles.active : ''} onClick={() => changeGallery(5)}>BioNET</button>
          </div>
          <div className={styles.galeria}>
            {transition && <Transition />}
            <div className={styles.desktop_gallery}>
              {selected === 1 && <ProductosGaleria selected={selected} slides={3} variant={'desktop'} />}
              {selected === 2 && <ProductosGaleria selected={selected} slides={3} variant={'desktop'} />}
              {selected === 3 && <ProductosGaleria selected={selected} slides={3} variant={'desktop'} />}
              {selected === 4 && <ProductosGaleria selected={selected} slides={3} variant={'desktop'} />}
              {selected === 5 && <ProductosGaleria selected={selected} slides={3} variant={'desktop'} />}
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
      </div>
    </section>
  )
}


function Transition() {
    return <div className={styles.gallery_transition}></div>
}