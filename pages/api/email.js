export default function handler(req, res) {	
	if (req.method === 'POST') {
		// Process a POST request
		const { name, email, message } = req.body;

		// REGEX
		const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
		const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

		// VALIDACION DE DATOS
		if(!name || name === "") {
			return res.status(400).json({ error: 'Por favor ingrese un Nombre.' });
		}
		if(!email || email === "") {
			return res.status(400).json({ error: 'Por favor ingrese un Email.' });
		}
		if(!message || message === "") {
			return res.status(400).json({ error: 'Por favor ingrese un Mensaje.' });
		}

		
		if(regexName.test(name) === false) {
			return res.status(400).json({ error: 'Por favor ingrese un Nombre válido.' });
		}
		if(regexEmail.test(email) === false) {
			return res.status(400).json({ error: 'Por favor ingrese un Email válido.' });
		}
		
		return res.status(200).json({ message: 'Mensaje Enviado' });
	}

	return res.status(200).json({ message: 'Hola :)' })
}


