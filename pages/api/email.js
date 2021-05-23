export default function handler(req, res) {	
	if (req.method === 'POST') {
		// Process a POST request
		// console.log(req.body.name);
		// console.log(req.body.email);
		// console.log(req.body.message);
		
		const name = req.body.name;
		const email = req.body.email;
		const message = req.body.message;

		//regex for international names
		const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

		// regex for email
		const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

		if(name === ""){
			console.log('Name cannot be empty');
			return false;
		}
		if(email === ""){
			console.log('Email cannot be empty');;
			return false;
		}
		if(message === ""){
			console.log('Message cannot be empty');
			return false;
		}
		// PASO 3 VALIDAR DATOS CON REGEX
		if(regexName.test(name) === false){
			console.log('Invalid name');
			return false;
		}
		if(regexEmail.test(email) === false){
			console.log('Invalid email');
		} else {
			return res.status(200).json({ message: 'Mensaje Enviado' });
		}

	}

	return res.status(200).json({ message: 'Hola :)' })
}


