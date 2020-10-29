//const fs = require('fs');
//const fs = require('express');
const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
crearArchivo(base)
    .then(archivo => console.log(`el archivo creado : ${archivo}`))
    .catch(err => console.log(err));