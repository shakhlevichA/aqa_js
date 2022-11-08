   
   
   //const arr = ['123','sdfd', 'adfs','', '123']
//    for (const key in arr) {
//     console.log(key)//получим ключи
//         console.log(arr[key])//получим значение ключа

//    }
//   for (const value of arr) {// пербераем не ключи а значения 
//     console.log(value)
//   }
//   console.log(arr.indexOf('123'))// возвращает индех значения
//   console.log(arr)
// console.log(arr.indexOf('123', 2))
// console.log(arr)


//  const arr = ['123','sdfd', 'adfs','', '123']
//  console.log(arr.join('1'))

// const arr = ['1', '2', '3', '4', '5','6']
// arr.splice(0, 5, 'e', 'f')
// console.log(arr)

const arr = [
    {name:'Andrey', id:111},
    {name:'Andrey', id:222},
    {name:'Andrey', id:333}
]
const obj = {name:'Andrey', id:444}
const formDate =['login', 'pass', true]

type ObjType = {name: string; id: number;}


console.log(arr.findIndex((value: ObjType) => value.id === 222))