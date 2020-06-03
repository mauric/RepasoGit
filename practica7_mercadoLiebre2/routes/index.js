var express = require('express');
var router = express.Router();

//requerir el controlador
var controlador = require('../controllers/mainController');


// Get method for controlador 
router.get('/', controlador.index);



module.exports = router;


