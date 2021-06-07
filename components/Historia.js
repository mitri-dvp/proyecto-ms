import styles from '../styles/Historia.module.css'

export default function Historia() {
  return (
		<section className={styles.container} id="historia">
			<div className={styles.main}>
				<h1>Nuestra Historia</h1>
        <div className={styles.card_container}>
          <Card title="Quienes somos" />
          <Card title="Misión" />
          <Card title="Visión" />
        </div>
      </div>
    </section>
  )
}

const Card = ({title, description}) => {

  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint, quos earum atque provident sed distinctio laborum quidem quo dolore. Molestias, voluptatibus. Consequatur optio est voluptate! Soluta eaque repellendus eligendi.
      Debitis, id magni temporibus quidem iste aperiam soluta dolorum tempore numquam, pariatur esse possimus praesentium eius exercitationem cupiditate vitae laboriosam odio incidunt porro minus iure ab. Veritatis, tempore ducimus.</p>
    </div>
  )

}