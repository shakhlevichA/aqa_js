//Используя метод **`some`** проверьте то,
// в массиве есть элемент кратный 3 и 5.

//> Реализуйте решение двумя способами,
// используя `function declaration` & `arrow function`.
// Реализуйте оба варианта, когда результирущее значение true или false

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const result = numbers.some(val => val === 3, 5)
console.log(result)

const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const res = numbers.some(function(val){

    //  НЕ СКЛАДЫВАЕТСЯ. ПИШЕТ 3 И 5 НЕ ПЕРЕКРЫВАЮТ ДРУГ ДРУГА. КАК ПЕРЕКРЫТЬ?
})

console.log(res)
