#!/usr/bin/env node
import { promptCL } from 'readline-sync';
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp , printError, printSuccess,printWeather} from './services/log.service.js';
import { getKeyValue, saveKeyValue , TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async function(token) {
    if(!token.length) {
        printError('no token');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('save token');
    } catch(e) {
        printError(e.massage);
    }
    
};

const saveCity = async function(city) {
    if(!city.length) {
        printError('no city');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('city save');
    } catch(e) {
        printError(e.massage);
    }
    
};

const  getForcast = async function() {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather);
        
    }
    catch(e) {
        if(e?.response?.status == 404) {
            printError('Not correct entered city');
        }

        else if(e?.response?.status == 401) {
            printError('Not correct entered token')
        } else {
            printError(e.massage);
        }
    }

}

const initCLI = function() {
    const args = getArgs(process.argv);
    
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
       return saveToken(args.t);
    }
    return getForcast();
};

initCLI();