// objeto literal con metodos para renderizar vistas relacionadas a /users
let userController = {
    users: (req, res) => {
        //se pasa eventualmente un objeto literal a la vista
        res.render('users', {title: 'titulo de la vista'});
    }
}


//exportar el modulo con ese objeto litearl
module.exports = userController;