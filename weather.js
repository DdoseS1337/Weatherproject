#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp , printError, printSuccess} from './services/log.service.js';
import { saveKeyValue , TOKEN_DICTIONARY } from './services/storage.service.js';

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


const initCLI = function() {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {

    }
    if (args.t) {
       return saveToken(args.t);
    }
    getWeather('kyiv');
};

initCLI();