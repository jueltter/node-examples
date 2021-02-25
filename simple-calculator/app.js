const yargs = require('yargs');
const calculator = require('./calculator.js');

const aOptions = {
    describe: 'First operator',
    demand: true,
    alias: 'a'    
}
const bOptions = {
    describe: 'Second operator',
    demand: true,
    alias: 'b'    
}
const argv = yargs
.command('add', 'a + b', {
    firstOperator: aOptions,
    secondOperator: bOptions
})
.command('subtract', 'a - b', {
    firstOperator: aOptions,
    secondOperator: bOptions
})
.command('multiply', 'a * b', {
    firstOperator: aOptions,
    secondOperator: bOptions
})
.command('divide', 'a / b', {
    firstOperator: aOptions,
    secondOperator: bOptions
})
.help()
.argv;
var command = argv._[0];

if (command === 'add') {
    console.log('Result: ', calculator.add(argv.firstOperator, argv.secondOperator));
}
else if (command === 'subtract') {
    console.log('Result: ', calculator.subtract(argv.firstOperator, argv.secondOperator));
}
else if (command === 'multiply') {
    console.log('Result: ', calculator.multiply(argv.firstOperator, argv.secondOperator));
}
else if (command === 'divide') {
    console.log('Result: ', calculator.divide(argv.firstOperator, argv.secondOperator));
}
else {
    console.log('Unknow command');
}
