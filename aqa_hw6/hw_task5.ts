// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
//Вычислите среднюю зарплату сотрудников 
//и результат поместите в соответствующую переменную

let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        Andrey: 664,
        alexandra: 199
    }
    let salariesSum = 0;
    for(const salariesKey in salaries){
        //@ts-ignore
        salariesSum += salaries[salariesKey] /5
    }
    console.log(salariesSum)

 