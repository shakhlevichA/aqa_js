//Напишите функцию **fooboo** 
//которая принимает в качестве аргумента три параметра:

//+ булевое значение
//+ функцию **foo** которая выводит в консоль свое имя
//+ функцию **boo** которая выводит в консоль свое имя

//> Если переданное булевое значение **true** 
//запускаем функцию **foo** иначе **boo**


function fooBoo(bool: boolean, foo: () => void, boo: () => void){
bool ? foo() : boo();
}
function foo() {
console.log(foo.name)
}
function boo() {
console.log(boo.name)
}
//fooBoo(true, foo, boo);
fooBoo(false, foo, boo);


