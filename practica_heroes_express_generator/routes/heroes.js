const express = require('express');
const router = express.Router();

let heroesController = require('../controllers/heroesController');

// Ruta /heroes ➝ se envía todo el array y Express lo parsea ara el browser como JSON :D
router.get('/', heroesController.mostrarHeroes);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id', heroesController.detalle);
//  
// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/:id/:ok?', heroesController.bio);



module.exports = router;