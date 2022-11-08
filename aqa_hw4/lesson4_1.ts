// Сгенирировать случайное число от 1 до 5
//Спросить у пользователя 'угадай число'
//Если пользователь ответит правельно написать 'Вы выиграли'
//Если нет, предложить ввод еще раз.






// var readline = require('readline-sync');
// var num11 = readline.question("Type a number:");
// const max = 5;
// const min = 1;
// const times =2;
// const number = Math.floor(Math.random()*(max-min))+min;
// for(let i=0; i<times; i++){
//     var num11 = readline.question("Type a number:");
//     if(+num11 == number){
//     console.log('Вы выиграли');
//     break;
// }else console.log('Введите ещё раз')

// }


//Есть масив строк и чисел :
// ["it is not short string with eight words", 12, -99, "Hello world", "word", "we are in big world", 56, -66]
//С помощью Math.rendom() выбрать случайное число и случайную строку (без использования функции для работы с масивом)
//для числа вывести 'положительное' или 'отрицательное'
// для стороки: вывести количество слов( у массива есть свойсто .lenght) и содержит ли строка слово "word" 
//Infi: Что бы взять отдельный эллемент из массива, используется индекс (напр. arr[5])
//Info: Индексы в массие начинаются с 0

// let newArray = ["it is not short string with eight words", 12, -99, "Hello world", "word", "we are in big world", 56, -66];
// let max = newArray.length -1;// 8 элементов масива
// //console.log(Math.floor(Math.random()*max));// это мы получим число от 0 до максимума
// //Math.floor получение целого числа
// let firstRandom = Math.floor(Math.random()*max)
// //console.log(newArray[firstRandom]);// вместо рондомно индекса мы пулучаем рондомный элеммент массива
// let firstValue = newArray[firstRandom];
// //console.log(typeof firstValue)// вывели тип рандомной переменной

// if(typeof firstValue === 'number')
//  if(firstValue > 0)
//  console.log('Положительный')
//   else
//   console.log('Отрицательный')
// else{console.log(firstValue.split(' ').length)
// console.log(firstValue.includes('word'))}


// const readline1 = require("readline-sync");
// const Q = 'What is the result of the expression? 12 * 2'
// var result:string = readline.question("Type something:");
// if (+result == 24)
// console.log('yes')
// else console.log('no')