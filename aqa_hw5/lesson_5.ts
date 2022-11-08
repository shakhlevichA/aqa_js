function converHoursToSecond(hoursAmount: number): void {
    console.log(hoursAmount * 60);
}
converHoursToSecond(3)


// function converHoursToSecond(hours: number): number { // то же самое что и выше но через "return"
//     return hours * 60   // что бы вернуть что то из футуции используем "return"
// } // return указывае что именно нужно вернуть. Иначе вернёт значение по умолчанию

// const result = converHoursToSecond(2)  //присвоить переменой и только тогда вывести в кансоль 
// console.log(result)


//FUCTION DECLARATION vs FUNCTION EXPRESSION 

// let x = 10
// function multiply(x: number): number{
//     let y =25;//FUCTION DECLARATION ( hoisting - можем вызвать до её обьявления)
//     return x * y;
// }

// console.log(multiply(x))


// let xx = 10
// const multiply1 = function (xx: number): number{
//     let y =25;//FUNCTION EXPRESSION ( таже самая переменноая к=у коорой тип функция)
//     return xx * y;
// }

// console.log(multiply1(xx))

// // СТРЕЛОЧНАЯ ФУНКЦИЯ///
// let xxx = 10
// const multiply2 = (xxx: number): number => {
//     let y =25;// не можем указать имя 
//     return xxx * y;
// }

// console.log(multiply2(xxx))


/////////ВИДЫ СТРЕЛОЧНЫХ ФУНКЦИЙ/////


//const multiply3 = (xxx: number) => console.log(xxx * 25); //без тела//если одна строчка во функции
// тело футкции то что находится после стрелки(сократили )

//console.log(xxx * 25)

// const multiply4 = (xxx: number) => xxx += 30;
// console.log(multiply4(70))


// const defaultNum1 = 10;
// const defaultNum2 = 20;

// const sum = (num1: number, num2: number) => num1 + num2;
// console.log(sum())
//тип можно не указывать

// const sum = (num1 = defaultNum1, num2 = defaultNum2) => num1 + num2;
// console.log(sum())

// const sums = (num1 = defaultNum1, num2: number = defaultNum2) => num1 + num2;
// console.log(sums(undefined,2))// ЕСЛИ УКАЗАТЬ undefined ТО ЗНАЧЕНИЕ ПРИНИМАЕТ ПО УМОЛЧАНИЮ



/////////////////////////////ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ //////
//если один параметр не обязателен стаким знак '?'
// const sums = (num1 = defaultNum1, num2?: number) => num1 + (num2 ? num2: 0);
// console.log(sums(undefined,2))

// или проверять через typeof
// const sums = (num1 = defaultNum1, num2?: number) => num1 + (typeof num2 !== 'undefined' ? num2: 0);
// console.log(sums(undefined,2))


//////CALLBACK функция/////
const defaultNum1 = 10;
const defaultNum2 = 20;

const sum = (num1 = defaultNum1, num2?: number) => num1 + (typeof num2 !== 'undefined' ? num2: 0);
const logToCons = (funcToExecute:(arg1: number, arg2: number) => number) => console.log(funcToExecute(12, 45))

logToCons(sum)



/////Немедленно вызываемая функция///

//ОБЕРНУТЬ ВСЮ ФУНКЦИЮ В СТРОКУ///

///РЕКУРСИЯ ///

// ВЫЗОВ ФУНКЦИИ В НУТРИ ФУНКЦИИ //

for (let index = 0; index < 5; index++) {
    console.log(index);
    
}
/// АЛЬТЕРНОИВНЫЕ ВАРАНТЫ///

function recFunc(index: number){
    console.log(index);
   if(index < 5) recFunc(++index);
}
recFunc(0)

// ПРЕИНКРИМЕНТ ВЫПОЛНЯЕТСЯ РАНЬШЕ ЧЕМ ВЫЗОВ ФУНКЦИИ
//ПОСТИНКРИМЕНТ СНАЧАЛО ВЫПОЛНЯЕТСЯ ФУНКЦИЯ С ПАРПАЕТРОМ ИНДЕКС
//












