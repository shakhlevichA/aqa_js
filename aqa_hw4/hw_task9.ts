//Дана произвольное число. 
//Реализовать метод проверяющий является ли это число целочисленным или нет.
// Если является - вывести его, 
//если нет - округлить до целой части.



const min:number = Math.ceil(1.543);
const max:number = Math.floor(9.999);
const qaz: number = Math.random() * (max - min) + min;
let newQaz = Number.isInteger(qaz)
if(newQaz == true){
    console.log(qaz)
}else{
    console.log(Math.floor(qaz))
}
