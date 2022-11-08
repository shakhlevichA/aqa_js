
// 1. Напишите программу, которая: просит пользователя последовательно ввести логин и пароль
// Сначала попросить ввести логин
// Если пользователь вводит несуществующий логин, то выдается сообщение: 
// "Пользователь не существует. Попробуйте еще раз"
// Если пользователь вводит правильный логин, то выдается сообщение: 
// "Введите пароль. Для смены пользователя, введите change"
// Если пользователь вводит неправильный пароль, выдается сообщение:
// "Пароль неверен, попробуйте еще раз"
// При правильном вводе выводится сообщение: "Приветствую"
// При вводе change, пользователю предлагается ввести логин
// После неправильного ввода, ввод повторяется, пока не будет правильного варианта
// варианты правильного логина: user1, user2, user3
// варианты правильного пароля: pass1, pass2, pass3
// все комбинации логин/пароль являются правильными (user1/pass1, user1/pass3, user2/pass3 и тд)
// Подсказка: для проверки использовать switch-case, т.к. работу с массивами пока не изучали

//import { Readline } from "readline/promises";

// Для ввода из консоли использовать:
//const readline = require('readline-sync');
//const result = readline.question("Вопрос, который будет выведен пользователю");
// Плюс установить пакеты @types/node и readline-sync

// const readline = require('readline-sync');
// function userLogin () {
//      const login = readline.question("Enter login\n");
//      switch(login){
//         case 'user1':
//             case 'user2':
//                 case 'user3':
//                     typePassword()
//                     break;
//         default:console.clear();
//         console.log("Пользователь не существует. Попробуйте еще раз")
//      }
// }
// function typePassword(){
//     const password = readline.question("Введите пароль. Для смены пользователя, введите change \n");
//     if(password==="change"){
//         console.clear();
//         userLogin();
//     }
//     else if( password == 'pass1' || password == 'pass2' || password == 'pass3') {
//       console.log('Hello') ;

//     }
//     else{ 
//     console.clear();
//     typePassword();
//     }
// }

// userLogin();

// 2. Попросить пользователя ввести что-либо. 
// Вывести, сколько секунд он писал (с математическим округлением) и сумму всех цифр в тексте
// Если введённая строка содержит "num" или "чис", попросить ввести число, вывести: 
// число в степени этого же числа и последнюю цифру числа
// Если строка содержит "str" или "стр", предложить ввести строку
// Вывести: количество слов в строке и сумму чисел в строке
// В ином случае пользователю предлагается ввести num или str и производятся те же действия, что и раньше


const readline1 = require('readline-sync');
const date1 = Date.now()
const result = readline1.question(" Type something\n")
const date2 = (Date.now() - date1) / 1000
console.log(date2)

function getDate(result:string) {
    if(result.includes('num') || result.includes('чис')){
        const number: number = +readline1.question('Type number:\n')
        const powNumber: number = Math.pow(number, number)
        const lastSymbol:number = number % 10
        console.log(`Pow: ${powNumber}, Last: ${lastSymbol}`)

    }else if(result.includes('str') || result.includes('стр')){
      const string:string = readline1.question('Type sentenc :\n')
      const arrFromString = string.split(' ').length
      const regExp = /\d+/g
      let regExResult = regExp.exec(string)
      let total = 0
      while(regExResult !== null) {
        total += +(regExResult as RegExpExecArray)[0]
        regExResult = regExp.exec(string)
      }
      console.log(`Words: ${arrFromString}, Sum: ${total}`)
    }else{
        getDate(readline1.question(" Type str or num\n"))
    }

}

getDate(result)

















