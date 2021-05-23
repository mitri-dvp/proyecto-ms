import { useState } from 'react'
import styles from '../styles/Contactanos.module.css'


export default function Contactanos() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const onSubmit = (e) => {
		// PASO 2 CAPTURAR DATOS
		e.preventDefault('');
		
		// CAPTURAR DATOS
		const body = {
			name: name,
			email: email,
			message: message
		};

		fetch('/api/email', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then(response => response.json())
			.then(data => {
				setData(data);
			})
			.catch(error => {
				setError(true);
			});

		// ENVIAR DATOS A TRAVES DE UN POST REQUEST

	}

	return (
		<section className={styles.container}>
			<div className={styles.main}>
				<h1>Contáctanos</h1>
				<form onSubmit={onSubmit}>
					<div className={styles.formContainer}>
						<div className={styles.formItem}>
							<div className={styles.formItemToCenter}>
								<label htmlFor="name">Nombre</label>
								<input
									type="name"
									name="name"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className={styles.formItem}>
							<div className={styles.formItemToCenter}>
								<label>Correo</label>
								<input
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required />
							</div>
						</div>
						<div className={styles.formItem}>
							<p>Your Message</p>
							<textarea cols="50" rows="5"
								name="message"
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
						<input type="submit" value="Submit" className={styles.formSubmit} />
					</div>
				</form>
			</div>
		</section>
	)
}
