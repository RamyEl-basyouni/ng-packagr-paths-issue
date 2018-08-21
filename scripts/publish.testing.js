const chalk = require('chalk');
const cpx = require('cpx');
const fs = require('fs');
const rimraf = require('rimraf');


console.log(chalk.blue('Publish to ') + chalk.green('\\ontrack-test1\\c$\\Ontrack.lib'));

cpx.copy('**.tgz', '\\\\ontrack-test1\\c$\\Ontrack.lib', _ => {

    console.log(chalk.blue('Remove temp files'));

    if (fs.existsSync('./ontrack-6.2.0.tgz')) // should be regex, use glob package
        fs.unlinkSync('./ontrack-6.2.0.tgz');
    if (fs.existsSync('./lib-dist'))
        rimraf('./lib-dist', _ => console.log(chalk.green('Done')));
});
