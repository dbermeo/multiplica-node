const fs = require('fs');

crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let data = '';

        for (let num = 1; num < 12; num++) {
            let res = num * base;
            data += base + ' * ' + num + ' = ' + res + '\n'
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`el archivo a sido con la tabal de ${base} ha sido creado`);
        });

    })
}

module.exports = {
    crearArchivo
}