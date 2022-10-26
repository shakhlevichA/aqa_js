
// ```javascript
//     let count = 42
//     let userName = '42'
// ```
// Создайте две переменные. 
// Поместите в них переменную **`count`** и превратите в строку,
//  а **`userName`** наоборот в число. 
//  Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let countString = String(count);
let countString1 = ' ' + count;
let countString2 =`${count}`;
let countString3 = count.toString()
console.log(typeof countString3)
console.log(countString3)


let userName = '42';
let userName1 = + userName;
let userName2 = parseFloat(userName);
console.log(typeof userName2)
console.log(userName2)