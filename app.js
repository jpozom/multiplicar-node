const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log('argv:', argv);

let comando = argv._[0];

// console.log('Aqui\n', argv)
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`el archivo creado es ${ archivo }`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('mensaje no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`el archivo creado es ${ archivo }`))
//     .catch(e => console.log(e))

// listarTabla(argv.base, argv.limite)
//     .then(lista => console.log('se listo la tabla', lista))
//     .catch(e => console.log(e))