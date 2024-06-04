

//Vamos falar de Arrow Function
//1 questão


const dobrarValores = (arr) => arr.map(num => num * 2);


const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = dobrarValores(numeros);
console.log(numerosDobrados); // [2, 4, 6, 8, 10]


// 2 questão
const ordenarPorTamanho = (arr) => arr.sort((a, b) => a.length - b.length);

const palavras = ["gustavo", "lucas", "victor", "kaua"];
const palavrasOrdenadas = ordenarPorTamanho(palavras);
console.log(palavrasOrdenadas); // ["kaua", "lucas", "victor", "gustavo"]


// 3 questão
const filtrarPares = (arr) => arr.filter(num => num % 2 === 0);

const numerosDiversos = [1, 2, 3, 4, 5, 6, 7, 8];
const numerosPares = filtrarPares(numerosDiversos);
console.log(numerosPares); // [2, 4, 6, 8]
