const axios = require('axios');

const getClima = async( lat, lng ) => {

    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=491de0e35579ccf3da1aec263285e934`)

    if( clima.data.cod === '400'){
        throw new Error('Nada encontrado');
    }

    return clima.data.main.temp;

}

module.exports = {
    getClima
}