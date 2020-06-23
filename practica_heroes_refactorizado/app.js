// Require de Express
const express = require('express');
const router = express.Router();
// Require de FS
const fs = require('fs');

// Require sistema de rutas
let routesHeroes = require('./routes/heroes.js');
let routesMain = require('./routes/main.js');



// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));


//Routes
app.use('/', routesMain);
app.use('/heroes', routesHeroes);


