
// 1. Есть случайный объект. 
// Напишите функцию, которая принимает параметром этот объект и производит действия:
// Суммирует все свойства, которые являются числом и возвращает сумму
// Складывает все свойства, которые являются строками в формате:
// propName = propValue, propName3 = propValue3
// Возвращает полученную строку


const obj = {
    key: 1 ,
    key1: 'ss',
    key3: 3,
    key4: true,
    key5: 'random'
};
let sumProperty = 0;
let sumPropertyString = '';
function sumObj( obj:object){
    for( const i in obj) {
        const key = i as keyof typeof obj;
        if(typeof obj[key]== 'number'){
            sumProperty+=+obj[key];
        }
        else if( typeof obj[key]=='string'){
            sumPropertyString += i+'='+obj[key] +',';
        }
    }
    return{ sumNumber: sumProperty, sumString: sumPropertyString.slice(0, sumPropertyString.length-2)};

}
console.log(sumObj(obj))


// 2. Есть случайный объект.
// Напишите функцию, которая принимает параметром этот объект и производит действия:
// Удаляет все свойства объекта, которые не являются числом или числом в строке (вроде '45.9')
// Выполняет случайные действия (с помощью math.random) (+-*/) с каждым числом и возвращает результат
// Например числа 3, 5, 9:   1. 3 + 5 = 8,   2. 8 * 9 = 72

//delete (user as any).id











// 3. Есть 2 объекта: 1 с ценами на товар, 2 со списком купленного и количеством товара.
// Написать функцию, которая принимает 2 объекта и возвращает сумму чека
// Например:
// const prices = {apple: 4.5, milk: 3, chokolate: 5, chicken: 8.88, salmon: 33.3}
// const toBuy = {apple: 3.5, milk: 2, chiken: 5}
// const toBuy2 = {chiken: 1.5, salmon: 1.3}

//key in obj2

//@ts-ignore