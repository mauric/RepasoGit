//crear un objeto literal con metodos que se guarda en una variable
let mainController = {
    index: (req, res) => {
        res.render('index', {title: 'titulo de la vista'});
    }
}




module.exports= mainController;