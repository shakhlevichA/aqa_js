//С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

//> Реализуйте решение двумя способами,
// используя `function declaration` & `arrow function`.


const numbers = [7, -4, 32, -90, 54, 32, -21]
const num = numbers.filter(function(el) {
	if (el >= 0) {
        return true
    }
});
console.log(num);



const num1 = numbers.filter(function(num){
    return num > 0
})
 console.log(num1)

