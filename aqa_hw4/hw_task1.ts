//Пользователь передает через переменную свою фамилию и имя. 
//Выведите приветсвие `Привет <Имя> <Фамилия>` 
//5 раз используя для каждого варианта разный регистр

var readline = require('readline-sync');
var enter = readline.question("What's your name?")
let userName = enter 
let nameArr = enter.split(' ')
let firstName = nameArr[0]
let lastName = nameArr[1]
console.log('Привет', firstName.toLowerCase(), lastName.toUpperCase())
console.log('Привет', firstName, lastName.toUpperCase())
console.log('Привет', firstName.toUpperCase(), lastName)


var readline = require('readline-sync');
var enter = readline.question("What's your name? :")
let userName = enter
console.log('Hallo', userName);
console.log('Hallo', userName.toLowerCase());
console.log('Hallo',userName.toLowerCase());
console.log('Hallo',userName.toUpperCase())
console.log('Hallo',userName.toUpperCase())
