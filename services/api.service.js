import axios from 'axios';
import https from 'https';
import { getKeyValue , TOKEN_DICTIONARY} from './storage.service.js'

const getWeather = async function(city) {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if(!token) {
        throw new Error('No token API, enter token by command -t [API_KEY]');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q:city,
            appid:token,
            lang: 'ua',
            units: 'metric'
        }
    });
    return data;
};

export { getWeather };