//Напишите функцию 
//которая в качестве аргумента 
//принимает в себя сумму кредита 
//который хочет получить клиент 
//и верните результат переплаты по кредиту:

//+ процентная ставка в год — 17%,
//+ количество лет — 5.

function overpayment1(creditSum: number ){
console.log(creditSum * 0.17 * 5 )
}
overpayment1(1000)

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