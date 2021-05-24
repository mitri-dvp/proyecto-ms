import styles from '../styles/Ubicanos.module.css'
import dynamic from 'next/dynamic'

export default function Ubicanos() {
	const Map = dynamic(
    () => import('./Map'),
    { ssr: false }
  )

	return (
		<section className={styles.container}id="ubicanos">
			<div className={styles.main}>
				<h1>Ubicanos</h1>
				<Map />
			</div>
		</section>
	)
}
