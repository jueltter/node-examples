console.log('Starting debugger-example\\app.js');
var person = {
    name: 'Stalin'
};

person.age = 27;

debugger;

person.name = 'Alejandro';
console.log(person);