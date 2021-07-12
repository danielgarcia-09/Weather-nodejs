

const argv = require('yargs').options({
    direccion:{
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

module.exports = {
    argv
}