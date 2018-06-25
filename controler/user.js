'use strict'

function pruebas(request, response) {
    response.status(200).send({
        menssage:'Probando la accion del controlador de usuarios del api rest y mongo.'
    });
}


module.exports = {
  pruebas
};