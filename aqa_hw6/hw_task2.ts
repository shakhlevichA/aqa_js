//Создать любой обьект с двумя ключами 
//и любыми значениями в них, 
//а затем проверить есть ли в обьекте определенный ключ
// и если есть вывести в консоль **true**

const user = {
    firstName: 'Andrey',
    lastName: 'Shakhlevich',
}
console.log('lastName' in user)