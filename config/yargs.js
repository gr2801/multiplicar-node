const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola al tabla de multiplicar', opts)
    .command('crear', 'crea un archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}