//Написать функцию **trimString** 
//которая в качестве аргумента принимает три параметра:

//+ строку
//+ значение от
//+ значение по

//После вызова функция должна вернуть переданную строку
// обрезанную по значениям от и по

function trimString(str: string, valueFrom: number, valueBy: number): void{
    console.log( str.substring(valueFrom,valueBy))
}
trimString('qwer qwwer qwer qwer', 3, 12)