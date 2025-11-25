//16 Questão
const listaNumeros = [10,2,4,3,7,8];

let listaNova = listaNumeros.map(numero=> numero*2)
console.log(listaNova)

//17 Questão
const temperaturaC = [10,2,4,3,7,8];

let temperaturaF = temperaturaC.map(temp => (temp*1.8)+32)
console.log(temperaturaF)

//18 Questão
const numeros = [10,2,4,3,7,8];

let numeroQuadrado = numeros.map( numero => numero*numero)
console.log(numeroQuadrado)

//19 Questão
const precos = [10,2,4,3,7,8];

let prcosDesc = precos.map(preco => preco*0.9)
console.log(prcosDesc)

//20 Questão
const numero = [10, 2.7, 4.8, 3.2, 7.5, 8.1];

let numeroArredondado = numero.map( Math.round)
console.log(numeroArredondado)
