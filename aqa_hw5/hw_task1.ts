//Написать функцию **getSum**,
// которая будет высчитывать сумму чисел от нуля, 
//до параметра, который мы в неё передаем. 

//> Если передадим число 100 то, 
//надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

function getSum(parNum: number): void{
let natNum = parNum * (parNum +1)/2;
console.log(natNum)
}

getSum(100)

function getSum1(parNum: number): void{
console.log(parNum * (parNum +1)/2)
}

getSum(100)
