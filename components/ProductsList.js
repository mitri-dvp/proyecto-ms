import React from 'react'

export default function ProductsList() {
  return (
    <div className={styles.productos_destacados_lista}>
    <div className={styles.productos_destacados_item}>
      <div className={styles.image_container}>
        <img src="/assets/hero-4.jpg" alt="" />
      </div>
      <h1>nombre del producto</h1>
      <p>$19.99</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
    </div>
    <div className={styles.productos_destacados_item}>
      <div className={styles.image_container}>
        <img src="/assets/hero-4.jpg" alt="" />
      </div>
      <h1>nombre del producto</h1>
      <p>$19.99</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
    </div>
    <div className={styles.productos_destacados_item}>
      <div className={styles.image_container}>
        <img src="/assets/hero-4.jpg" alt="" />
      </div>
      <h1>nombre del producto</h1>
      <p>$19.99</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
    </div>
  </div>
  )
}
