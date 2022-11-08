//Используя метод **`map`** 
//создайте новый массив, 
//на основе массива **`users`**, 
//в котором каждый элемент массива будет содержать строку вида:

//> ['member 1: Darya', 'member 2: Masha', ... etc]

//> Реализуйте решение двумя способами, 
//используя `function declaration` & `arrow function`.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const arrNew = users.map((el, index) => `member ${index}: ${el}`)
console.log(arrNew)

const arr = users.map(function(el, index){
 return(`member ${index}: ${el}`)
})
console.log(arr)

