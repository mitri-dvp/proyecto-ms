export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    // PASO 3 VALIDAR DATOS CON REGEX
    console.log(req.body)
    return res.status(200).json({ name: 'Mensaje Enviado' })
  
  }
  
  return res.status(200).json({ name: 'Hola :)' })
}
