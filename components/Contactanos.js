import { useState } from 'react'
import styles from '../styles/Contactanos.module.css'

export default function Contactanos() {
	const [names, setNames] = useState('');
	const [lastNames, setLastNames] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const onSubmit = (e) => {
		// PASO 2 CAPTURAR DATOS
		e.preventDefault('');
		
		// CAPTURAR DATOS
		const body = { names, lastNames, email, phone, message };

		fetch('/api/email', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		})
		.then(response => response.json())
		.then(data => {
			if(data.error) {
				setError(true)
				return
			}
			if(data.message) {
				setData(data);
				return
			}
		})
		.catch(error => {
			setError(true);
		});
	}

	return (
		<section className={styles.container} id="contacto">
			<div className={styles.main}>
				<h1>Contáctanos</h1>
				<form className={styles.form} onSubmit={onSubmit}>
						<div className={styles.formGroup}>
							<div className={styles.formItem}>
								<div className={styles.formItemToCenter}>
									<label htmlFor="names">Nombres</label>
									<input
										type="names"
										name="names"
										id="names"
										value={names}
										onChange={(e) => setNames(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className={styles.formItem}>
								<div className={styles.formItemToCenter}>
									<label htmlFor="lastNames">Apellidos</label>
									<input
										type="lastNames"
										name="lastNames"
										id="lastNames"
										value={lastNames}
										onChange={(e) => setLastNames(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className={styles.formItem}>
								<div className={styles.formItemToCenter}>
									<label htmlFor="phone">Teléfono</label>
									<input
										type="phone"
										name="phone"
										id="phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className={styles.formItem}>
								<div className={styles.formItemToCenter}>
									<label htmlFor="email">Correo</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
					
						<div className={styles.formItem}>
							<label htmlFor="message">Mensaje</label>
							<textarea cols="50" rows="5"
								name="message"
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required></textarea>
						</div>
						<div className={styles.formItem}>
							{
								error &&
								<div className={styles.error}>
									<p>Algo salió mal... Intente más tarde</p>
								</div>
							}
							{
								data &&
								<p className={styles.success}>Mensaje enviado</p>
							}
						</div>
						<input type="submit" value="ENVIAR" className={styles.formSubmit} />
				</form>
			</div>
		</section>
	)
}
