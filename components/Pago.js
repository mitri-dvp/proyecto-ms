import { useState } from 'react'

import styles from '../styles/Pago.module.css'

export default function Pago() {

  return (
    <section className={styles.container} id="pago">
      <div className={styles.main}>
        <h1>Métodos de Pago</h1>
        <div className={styles.images}>
          <div>
            <img src="./assets/pago/paypal-logo.svg" alt="" />
          </div>
          <div>
            <img src="./assets/pago/bod-logo.png" alt="" />
          </div>
          <div>
            <img src="./assets/pago/bod-pago-express-logo.png" alt="" />
          </div>
          <div>
            <img src="./assets/pago/BBVA-logo.png" alt="" />
          </div>
          <div>
            <img src="./assets/pago/zelle-logo.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}


function Transition() {
    return <div className={styles.gallery_transition}></div>
}