//Создать любой обьект с двумя ключами 
//и любыми значениями в них,
// а затем удалить ключи из обьекта.

const user = {
    firstName: 'Andrey',
    lastName: 'Shakhlevich',
}

delete (user as any).lastName

console.log(user)












