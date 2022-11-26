//Дана строка 'я учу typescript!'. 
//Вырежите из нее слово 'учу' и слово 'typescript' 
//разными способами (через substring, slice).

const txt = 'я учу typescript!';
console.log(txt.slice(2,6), txt.slice(6,16))
console.log(txt.slice(2,16))

console.log(txt.substring(16,2))
console.log(txt.substring(6,2),txt.substring(16,6))


