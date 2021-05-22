import { useState } from 'react'
import styles from '../styles/Contactanos.module.css'

export default function Contactanos() {
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    // PASO 2 CAPTURAR DATOS
    e.preventDefault()
    // CAPTURAR DATOS
    console.log(name)

    // ENVIAR DATOS A TRAVES DE UN POST REQUEST
  }

  return (
    <section className={styles.container} id="contacto">
      <div className={styles.main}>
        <h1>Contáctanos</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}
