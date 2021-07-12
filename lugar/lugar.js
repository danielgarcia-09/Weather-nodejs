const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI( direccion );
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDk93Njo5aMXz0zwcaNl480t1OaLmBm9BU`);

    if( resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    
    const { formatted_address, geometry } = resp.data.results[0]
    const { location } = geometry;

     return {
        direccion: formatted_address,
        latitud: location.lat,
        longitud: location.lng
    }

}

module.exports = {
    getLugarLatLng
}

