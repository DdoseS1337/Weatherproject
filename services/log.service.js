import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = function(error) {
    console.log(chalk.bgRed('ERROR') + ' ' + error);
};


const printSuccess = function(message) {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
};

const printHelp = function() {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}  
        Without paramets - show weather
        -s [CITY] for setup city
        -h for help
        -t [API_KEY] for save token 
        `);
};

const printWeather = function(res) {
    console.log(
        dedent`${chalk.bgYellow(' Weather ')} Weather  in city ${res.name}
        ${res.weather[0].description}
        Temperature: ${res.main.temp} (feels like ${res.main.feels_like})   
        humidity: ${res.main.humidity}%
        WInd speed ${res.wind.speed}
        `);
}

export { printError, printSuccess, printHelp, printWeather};