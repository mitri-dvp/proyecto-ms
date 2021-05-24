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
		<section className={styles.container}>
			<div className={styles.main}>
				<h1>Contáctanos</h1>
				<form className={styles.form} onSubmit={onSubmit}>
					<div className={styles.formContainer}>
						<div className={styles.formGroup}>
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
					</div>
				</form>
			</div>
		</section>
	)
}
