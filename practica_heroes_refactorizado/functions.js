// Leyendo y parseando (en array) el contenido de heroes.json

let fs = require('fs');

const parsingFile = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));

const heroesPath = __dirname + "/data/heroes.json";


var objetoFunciones = {
  getHeroes: () => parsingFile(heroesPath)
};


module.exports = objetoFunciones;

