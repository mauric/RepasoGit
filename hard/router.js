const content = require('./src');


module.exports = {
 	routes: (req, res) => {
		switch (req.url) {
			case "/":
				res.end(content.homePage());
				break;
			case "/en-cartelera":
				res.end(content.cartelera());
				break;
			case "/mas-votadas":
				res.end(content.masVotadas());
				break;
			case "/sucursales":
				res.end(content.sucursales());
				break;
			case "/contacto":
				res.end(content.contactos());
				break;
			case "/preguntas-frecuentes":
				res.end(content.preguntasFrecuentes());
				break;
			default: 
				res.end("Error!!!!!!!");
			}
		}
	}


