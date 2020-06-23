
// Leyendo y parseando (en array) el contenido de heroes.json
const funciones = require('../functions'); 
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = funciones.getHeroes();

var heroesController = {
	mostrarHeroes : (req, res) => {res.send(heroes)},
	detalle : (req, res) => {
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
	},
	bio	: (req, res) => {
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
	},

};


module.exports = heroesController;