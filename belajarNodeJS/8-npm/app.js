const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('oktayudha05@gmail.com'));
// console.log(validator.isMobilePhone('082231951900', 'id-ID'));
// console.log(validator.isNumeric('082231951900'));

// console.log(chalk.blue('hello world'));
const pesan = chalk`Lorem ipsum {italic.blue dolor}, sit amet consectetur {bold.red adipisicing}.`;
console.log(pesan);