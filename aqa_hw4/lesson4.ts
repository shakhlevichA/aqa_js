// const var1 = 'Hello World';
// console.log(var1.toLowerCase())
// const var2 = 'Hello World';
// console.log(var1.toUpperCase())
// const var3 = 'Hello';
// const var4 = 'My';
// const var5 = 'World';
// const var6 = '!';
// console.log(var3.concat(var4,' ',var5,var6))
// console.log(var3 + var4 + var5 + var6)
// console.log(`${var3}${var5}${var6}`)

//import { Console } from "console"

// const var7 = 'Hellow My World!\nthis one line'
// console.log(var7)
// console.log(var7.split('\n'))

// const var8= '#';
// //console.log(var8.repeat(2))
// for (let index = 3; index < 12; index++) {
//    console.log(var8.repeat(index))
    // }


// const var7 = 'Hellow My World!\nthis one line'

// //console.log(var7.charAt(0))
// console.log(var7[3])

//const var7 = 'Hello My World!\nthis one line one line';
//console.log(var7.includes('wer'))
//console.log(var7.indexOf('h',4))
//console.log(var7.lastIndexOf('w'))
//console.log(var7.startsWith('My World!\nthis one line',7))
// console.log('h' + 'H')
//console.log(var7.endsWith(' one line ',7))
//console.log(var7.slice(6, 8))
//console.log(var7.substring(6, 8))
//console.log(var7.trim())
//console.log(var7.replace('My ', 'your'))
//console.log(var7.replace(/one/g, 'TWO'))

//const obj: object = {};
//console.log(`${obj}`)// метод toString

// let num = 6;
// //console.log(num.toString())
// console.log(`` + num)

// let str: number = 5;
// console.log(str.toString())

// const now = 3;// обрезает по правилам округления 
// const noow = 2
//console.log(now.toFixed(4))
// console.log(Number.isInteger(now))
// console.log(parseFloat(now))
// console.log(parseInt(now))
//console.log(Math.floor(now))
//console.log(Math.floor(now) === parseInt(now.toString())??console.log(parseInt(now.toString()))
// console.log(Math.round(now))
// //console.log(now.toFixed(0))
// console.log(noow)
// console.log(Math.pow(now,noow))
// console.log(2 ** 3)
// console.log(Math.pow(nuvow,noow) === 2 ** 3)

// const min:number = Math.ceil(1);
// const max:number = Math.floor(46);
// const res: number = Math.floor(Math.random() * (max - min) + min);

// console.log(res)
//////////////////////DATE///////////
// const date = new Date();
//  console.log(date.toLocaleDateString())
// console.log(date.toLocaleString('de-AT'))
// console.log(date.toLocaleTimeString())
// console.log(`${date.getDay()}>${date.getMonth()}`)
// console.log(date)
// console.log(date)
// const date1 = new Date('11 29 2011');
// console.log(date)

// сколько миле секунд выполняется наше приложение?//

// const date = Date.now()

// console.log('Hello World')
// console.log(`Executed ${Date.now() - date} ms`)

// ///РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ/////

// const regExp = /one/g;
// const text = 'one two one three ts-node ts- node one rs ts- node'
// let regExpResult;
// while(regExpResult = regExp.exec(text)){
//     console.log(regExpResult[0]);
// }
// let gt = 111112333;

// const regExp = /one/;
// const text = 'one1  two  1  11 1 2one 3 3 3three ts-node ts- node one rs ts- node'
// let regExpResult;
// console.log(text.replace(/\d/g, '')) //(\d)-убираем цифры из строки
// console.log(text.replace(/\D/g, '')) //(|D)-убираем буквы из строк
// console.log(parseInt(text.replace(/\D/g, '')) ==gt) //через parseInt получать число и сравнивать его с другим числом//

const text = 'one1  two  1  11 1 2one 3 3 3three ts-node ts- node one rs ts- node'
console.log(text.replace(/\s/g, ''))/// (\s)- убирает любые пробелы
console.log(text.replace(/\s/g, '<empty>'))// заменяет
console.log(text.replace(/\w/g, ''))// убирает все буквы и цивры 

console.log(text.replace(/\d{3}/g, ''))
