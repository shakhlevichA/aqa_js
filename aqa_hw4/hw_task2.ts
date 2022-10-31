//Дана строка 'я учу typescript!'. 
//Проверить, есть ли данное слово в строке:
// если есть - вывести позицию подстроки 'учу', 
//если нет - вывести строку `Данной подстроки нет`



function overpayment(creditSum: number ){
    const yearsCount = 5;
   let overpay = 0;
 for(let i = 0, yearPay = creditSum/yearsCount;i < yearsCount;i++) {
  overpay += creditSum * 0.17;
  creditSum -= yearPay;
  return overpay
}
}
console.log(overpayment(1000))
