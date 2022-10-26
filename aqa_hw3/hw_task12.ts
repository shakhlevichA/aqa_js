const readline = require("readline-sync");
const Q = 'What is the result of the expression? 12 * 2'
var result:string = readline.question("Type something:");
if (+result == 24)
console.log('yes')
else console.log('no')