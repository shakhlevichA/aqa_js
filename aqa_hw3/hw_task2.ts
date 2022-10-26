// Создайте переменные:

//     - количество секунд в минуте
//     - количество минут в часу
//     - количество часов в сутках
//     - количество суток в году
    
// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

const secInMin = 60;
const minInHour = 60;
const hourInDay = 24;
const dayInYear  = 365;
let myAgeInSeconds = 35;
myAgeInSeconds = myAgeInSeconds * dayInYear * hourInDay * minInHour * secInMin;
console.log(myAgeInSeconds)