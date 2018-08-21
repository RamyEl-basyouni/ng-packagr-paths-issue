const chalk = require('chalk');

console.log(chalk.blue('Copying assets to package....'));


const cpx = require('cpx');

cpx.copy('src/styles.css', 'lib-dist');
cpx.copy('src/assets/**/*', 'lib-dist/assets');