// Создать 3 переменные разных типов 
//и вывести в консоль для каждой из них 
//строку следующего вида:    

//     `Variable: %variable name% have type: %type variable%`


let qwe:string = `Variable: %variable name% have type: %type variable%`;
console.log(qwe)
let ewq: any = `Variable: %variable name% have type: %type variable%`;
console.log(ewq)
let weq= Symbol(`Variable: %variable name% have type: %type variable%`);
console.log(weq)
// не уверен, что правельно понял условие, но так работает.
