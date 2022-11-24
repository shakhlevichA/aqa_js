//Дана произвольная строка. 
//Реализуйте метод, который принимает позицию символа в строке. 
//Если переданное число больше длины строки, 
//то должно отобразиться сообщение: 
//`Вы вышли за границу строки`

let num = 53
let str = 'An arbitrary string is given.';
if (str.charAt(num)){
   console.log()
}else console.log(`Вы вышли за границу строки`)

let num1 = 53
let str1 = 'An arbitrary string is given.';
const symb = str1.charAt(num1);
if (symb){
console.log(symb)
}else console.log('Вы вышли за границу строки')
//либо так, через тернарный
let num2 = 53
let str2 = 'An arbitrary string is given.';
const symb2 = str2.charAt(num2);
console.log(symb2 ? symb2 : 'Вы вышли за границу строки')

let num3 = 53
let str3 = 'An arbitrary string is given.';
const symb3 = str3.charAt(num2);
if (!str3.charAt(num3)) console.log('Вы вышли за границу строки')

