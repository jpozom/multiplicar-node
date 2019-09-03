const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    // return new Promise((resolve, reject) => {

    console.log('==========================='.green);
    console.log(`esta es la tabla del ${base}`.red);
    console.log('==========================='.yellow);

    for (let i = 1; i <= limite; i++) {
        let res = limite * i;
        console.log(`el resultado de ${ i } * ${ limite } = ${ res }\n`);
    }

    // });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`ud inserto un caracter "${ base }", no es un pinche numero`)
            return;
        }

        for (let i = 1; i <= limite; i++) {

            let res = base * i;
            data += `el resultado de ${ base } * ${ i } = ${ res }\n`;
        }

        fs.writeFile(`tablas/archivo-tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`archivo-tabla-${ base }-al-${ limite }.txt`.green);
        })
    })
};

module.exports = {
    crearArchivo,
    listarTabla
}