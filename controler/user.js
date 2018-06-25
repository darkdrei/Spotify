'use strict'

var bcrypt = require('bcrypt-nodejs')
var User = require('../models/usuario')

function pruebas(request, response) {
    response.status(200).send({
        menssage:'Probando la accion del controlador de usuarios del api rest y mongo.'
    });
}


function saveUser(request, response){
    var user = new User();

    var params = request.body;
    console.log(params);
    user.name = params.name;
    user.username = params.username;
    user.email = params.email;
    user.role = 'ROL_USER';
    user.image = 'null';
    if(params.password){
        //Encriptar contraseña guardar dato
        bcrypt.hash(params.password, null, null, function (err, hash) {
            user.password = hash;
            if (user.name != null && user.username != null && user.email != null){
                //Guardar Uusrio
                user.save((err, userStored)=>{
                    if(err){
                        response.status(500).send({menssage:'Error a el guardar el usuario.'});
                    }else{
                        if(!userStored){
                            response.status(404).send({menssage:'No se ha registrado el usuario.'});
                        }else{
                            response.status(200).send({user:userStored});
                        }
                    }
                });
            }else{
                response.status(200).send({menssage:'Rellena todo los campos.'});
            }
        })

    }else{
        response.status(500).send({menssage: 'Introduce la contraseña.'});
    }
}

module.exports = {
    pruebas,
    saveUser
};