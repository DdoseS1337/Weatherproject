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

export { printError, printSuccess, printHelp};