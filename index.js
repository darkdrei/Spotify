'use strict'

var mongoose = require('mongoose');
var app = require('./app');

var port =process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso_mean2', (error, res)=>{
   if(error){
        throw error;
   } else{
       console.log('La base de datos esta corriendo correctamente');
       app.listen(port, function(){
          console.log("Servidor del api de musica escuchando http://localhost:"+port);

       });
   }
});