// let num1: number;
// let num2: number;
// num1 = 10
// num2 = 5
// console.log(Math.random() * Math.abs(num1 + num2))

// const obj = {
//     name: 'Andre',
//     qa: 'yes'
// }

// const objName = obj[ "name"]
// const objName1 = obj.name
// console.log(objName)
// console.log(objName1)

// ОПЕРАТОР in

// console.log('qaz' in obj)
// console.log('qa' in obj)

// const num = 10;
// let num1 = num;
// num1++
// console.log(num1)

// const obj = {
//     name: 'Andre',
//     qa: 'yes'
// }
// // подмена значенй 
// const obj1 = obj
// obj1.name = "Andrey";
// console.log(obj.name)

// console.log(obj === obj1)

/// ПЕРЕДАЧА ОБЬЕКТА В ФУНКЦИЮ///

// interface User {
//     name: string;
//     id: number;
// }

// const user1 ={
//     name: 'asd',
//     id: 123,
//     //qwe: 'kksss'
// }

// function changeUser(user: User){
//     user.name = 'new name';

// }

// changeUser(user1);
// console.log(user1.name)

// //// ЦИКЛ FORIN/////////////////////////////////////////////////
//   const obj = {
//     name: 'My name',
//     isMale: true,
//     age: 30
// }

// for (const key in obj) {
//     //@ts-ignore
//     console.log(`Obj key ${key} has valye ${obj[key]}`)
//  //console.log(obj[key])
//  console.log(key)


/////////СОЗДАНИЕ ФУНКЦИИ В ОБЪЕКТЕ/////////////////////////// 
// const obj = {
//     name: 'My name',
//     isMale: true,
//     age: 30,
//     log: function(){
//         console.log( 'my name is ' + this.age)
//     }
// }
// obj.log()

// const obj = {
     
//     name: 'My name',
//     isMale: true,
//     age: 30,
//     log:log
// }



// const obj1 = {

//     name: 'Hers name',
//     isMale: false,
//     age: 35,
//     log:log
// }
// function log(this: any){
//     console.log(`Aga of ${this.name} if ${this.age}`)
// }
// obj.log();
// obj1.log()

// /////////////JSON////////////

// const obj = {
//        name: 'My name',
//     isMale: true,
//     age: 30,
    
// }

// console.log(JSON.stringify(obj))

// const obj1 = {
//        name: 'My name',
//     isMale: true,
//     age: 30,
    
// }

// const response =`{"name":"My name","isMale":true,"age":30}`
// console.log(JSON.parse(response));

// ///////КОПИРОВАНИЕ КЛАНИРОВАНИЕ ОБЪЕКТОВ//////////

// const obj = {
//        name: 'My name',
//     isMale: true,
//     age: 30,
    
// }
// const cloneObj = {
//     hairColor:'red',
//     ...obj}

// console.log(cloneObj)

// const obj = {
//        name: 'My name',
//     isMale: true,
//     age: 30,
    
// }
// const cloneObj = {
//     hairColor:'red',
//     ...obj}

// console.log(cloneObj)

// const strC1 = structuredClone(obj)///// второй метод кланирования

// ///////ЕЩЁ ОДИН МЕТОД КЛОНИРОВАНИЯ
// const jsonClone = JSON.parse(JSON.stringify(obj))/// НОВЫЙ КЛОН ОБЪЕКТА НО С ТИПОМ any
// ///////ЕЩЁ ОДИН МЕТОД КЛОНИРОВАНИЯ
// const byAssign= Object.assign({myProp:123}, obj)



///////////////type and interface////////

// type User = {
//     name: string;
//     isMail: boolean;
//     age: number;
// }
// interface iUser  {
//     name: string;
//     isMail: boolean;
//     age: number;
//     id: numOrString
// }

// const obj: iUser = {
//     name: 'Andrey',
//     isMail: true,
//     age: 30,
//     id: 'dfg'
    
// }

// type numOrString = string | number

// //// objekt vs type/interface/////////////////////

// let user = {
//     name: 'Admin',
//     isMail: true,
//     age: 25,
//     id: 12345
// }

// function updateUser(user: iUser){

// }
// function updateUser(user: User){
    
// }
// //в объекте не видно параметроф
// //если нужен конкретный пользователь нужно использовать 
// //tupe or inretface
// function updateUser(user: object){
//     for (const key ) 
// }

//// as ////

// type User = {
//     name: string;
//     isMail: boolean;
//     age: number;
// }
// interface iUser  {
//     name: string;
//     isMail: boolean;
//     age: number;
//     id: number
// }
// interface iUser{
//     regDate: Date
// }
// let user = {
//     name: 'Admin',
//     isMail: true,
//     age: 25,
//     id: 12345
// }

// console.log((user as iUser).regDate)

// ////////// КАК ПОЛУЧИТЬ КЛЮЧИ ОБЪЕКТА////
//  const keys = Object.keys(user)
//  const values = Object.values(user)
//  const enteries = Object.entries(user)
// console.log(enteries[0][1])
// console.log(enteries[3][0])