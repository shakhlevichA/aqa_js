// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90]
console.log(numbers.slice(0, 5))


const removeItems = (numbers: any[], itemToRemove: string | any[]) => { 
  
  return numbers.filter((v: any) => { 
    	return !itemToRemove.includes(v); 
    });

}
console.log(removeItems( [5, 43, 63, 23, 90], [5, 43, 63, 23, 90]))

