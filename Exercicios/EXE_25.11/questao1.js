let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let idade = [10,12,24,28,17,18,20];
let notas = [45,55,60,70,100,35,20,25,27,36,13,17];

console.log(lista.filter(lista => lista%2 === 0 ))

console.log(lista.filter(lista => lista%2 !== 0 ))

console.log(idade.filter(idade => idade >= 18 ))

console.log(notas.filter(nota => nota >= 60 ))

console.log(notas.filter(notas => notas%5 === 0 ))

console.log(notas.filter(numeros => numeros%2 !== 0 && numeros%3 !== 0 && numeros%5 !== 0 && numeros%7 !== 0 && numeros%11 !== 0))