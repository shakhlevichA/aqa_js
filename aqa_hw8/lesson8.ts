// Да, забыл озвучить по поводу операторов.
// \\ и && имеют одинаковый приоритет и выполняются просто слева на право. 
//Соответственно, скобки имеют более высокий приоритет и если операторы в скобках,
// то выполняются в первую очередь и потом то, что после скобок. Т.е. 
// 1. true \\ false && false = true, т.к. true\\  это true
// 2. (true \\ false) && false = false, т.к. true в скобках && false
// 3. false\\  true && false = true, то же, что в 1
// 4. false \\ (true && false) = false, т.к. false || false в скобках


// const qw = 1234;
// console.log(typeof qw === 'number')

// let obj = {
//     www:111,
//     qqqq: 'dfs'
// }
// type qwe = {
//     aaa: number,
//     zzz: string,
//     xxx: boolean
// }

// let key: keyof qwe = {
//     aaa: 343,
//     zzz: 'sdf',
//     xxx: true
// }
///////////// FOR EACH/////////
 
 
 
// const obj = {

//     age:75
// };
//    [123, 456]. forEach(el => console.log(el))

   const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function Prime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(Prime)); // [2, 3, 5, 7, 11, 13]

// 1. Запрашивать у пользователя username и password для новых пользователей.
// При вводе добавлять в массив комбинации
// При вводе пользователем пустого логина или пароля, прекратить запрос
// Попросить ввести пользователя, для которого он хочет узнать пароль
// Если пользователь существует, то вывести его пароль, если нет - "User not found"





const readline = require("readline-sync");
var result = readline.question("Type something:");

const login = readline.question('Enter login')
const pas = readline.question('Enter pas')

let arr: object[] = [];











