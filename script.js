//Get user input
// Choose our parser
// Parse input
// Execute input
//Return data
// Repeat

const insertParser = require("./parsers/insert");

const insertCommand = insertParser('INSERT { "a" : 1 } INTO test');
console.log(insertCommand);