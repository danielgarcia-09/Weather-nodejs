
const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;


let getInfo = async( direccion ) => {

    try {
        
        let coors = await lugar.getLugarLatLng( direccion );
        let temp = await clima.getClima( coors.latitud, coors.longitud );

        return `La Temperatura en ${ coors.direccion } es de ${ temp }`;
    } catch ( e ) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }


}

getInfo( argv.direccion )
    .then( msj => console.log(msj) )
    .catch( e => console.log(e) );