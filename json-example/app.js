console.log('Starting json-example\\app.js');
const fs = require('fs');

/*
var obj = {
    name: 'Stalin'
}

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);
*/

/*
var personString = '{"name":"Stalin","age":27}';

var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/

/*
var originalNote = {
    tittle: "Some tittle",
    body: "Some body"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
*/

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.tittle);