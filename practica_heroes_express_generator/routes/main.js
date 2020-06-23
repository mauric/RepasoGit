const express = require('express');
const router = express.Router();


let mainController = require('../controllers/mainController');

// Ruta Raíz / ➝ Home
router.get('/', (req, res) => {
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
});

//
//// Ruta Créditos
//// ¿?

// Ruta... ¿Pára qué sirve esto?
//router.get('*', (req, res) => {
//	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
//});


module.exports = router;