'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curso_mean2', (error, res)=>{
   if(error){
        throw error;
   } else{
       console.log('La base de datos esta corriendo correctamente');
   }
});