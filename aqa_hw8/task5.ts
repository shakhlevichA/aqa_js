//Используя метод **`find`** найдите в массиве первое четное число.

// ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// ```

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const num = numbers.find(el => el == 5)
console.log(num)