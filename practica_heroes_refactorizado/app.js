// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	const heroe = heroes.find(x => x.id == req.params.id);
	//console.log(req.params.id);
	//console.log(heroe);

	if(!heroe){
		//res.send('No encontramos un héroe para mostrarte su biografia'​);
		res.send("No encontramos un héroe para mostrarte su biografia");
	}else{
	// Si se encuentra al héroe se envía el nombre y su profesión
	//console.log(heroe.nombre);
		// Si NO se encuentra se envía el mensaje de no encontrado
			res.send(`<h1>${heroe.nombre}</h1>: <br><br><br> <h2>${heroe.resenia}</h2>`);
		}
	
});
//  
// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find(x => x.id == req.params.id);

	// Si NO se encuentra al héroe se envía un mensaje
	if(!heroe){
		res.send(`No encontramos tu heroe!!`)
	} else {
		if(req.params.ok != undefined){
			
			res.send(`<h1>${heroe.nombre}</h1>: <br><br><br> <h2>${heroe.resenia}</h2>`);
		}else{
			res.send(`<h1>${heroe.nombre} Lamento que no deseas saber mas de mi!!</h1>`)
		}
	}
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}
);
//
//// Ruta Créditos
//// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});




