// Questão Numero 1
let saudacao="Olá, JavaScript";
console.log(saudacao);

//Questão Numero 2
var idade = 30 ; // tem escopo de função ou global, e pode ser reatribuído e redeclarado.
let nome = "Ricardo"; // tem escopo de bloco e pode ser reatribuído, mas não redeclarado.
const PI = 3.14; // em escopo de bloco e não pode ser nem reatribuído nem redeclarado, exigindo inicialização. 

//Questão Numero 3
let cidade = "Socorro" // Criação da Variavel cidade com a atribuição do nome Socorro.
console.log(cidade);
cidade = "Nova Cidade"; // Alteração do nome Socorro para Nova Cidade.
console.log(cidade);

/*Questão Numero 4
(Uncaught TypeError: Assignment to constant variable.) Variaveis do tipo const não podem ser reatribuidas.
PI = 3,14159; 
console.log(PI);*/

//Questão Numero 5
let num1 = 15;
let num2 = 7;
let resultadoSoma = num1+num2;
console.log(resultadoSoma);

//Questão Numero 6
let resultadoSubtracao = num1-num2;
console.log(resultadoSubtracao);

//Questão Numero 7
let resultadoMultiplicacao = num1*num2;
console.log(resultadoMultiplicacao);

//Questão Numero 8
let resultadoDivisao = num1/num2;
console.log(resultadoDivisao);

//Questão Numero 9
//Usado para definir em qual questão pertence o codigo e ele serve para uma documentação mais simples ou remoção de uma unica linha do codigo.

//Questão Numero 10
//Foi utilizado na questão numero 4, a principal diferença é que não há limite para quantidade de linhas comentadas por esse metodo.

//Questão Numero 11
let quantidade = 5;

//Questão Numero 12
let TAXA_JUROS = 0.05;

//Questão Numero 13
let primeiroNome = "Ricardo";
let ultimoNome = "Henrique";
let nomeCompleto = primeiroNome+" "+ultimoNome;
console.log(nomeCompleto);

//Questão Numero 14
let a = 10;
let b = 5;
let c = 2;
console.log((a+b)*c);

//Questão Numero 15
let x = 3;
let y = 4;
let z = 2;
let result1 = x+y*z ;
let result2 = (x+y)*z ;
console.log(result1, result2);

//Questão Numero 16
let div0 = 6/0 ;
console.log(div0);
/* Aparece a palavra Infinity. Como a divisão por 0 é uma equação matematicamente indefinda, em javaScript
foi dado esse tratamento a ela, outras repesentações são -Infinity e NaN*/

//Questão Numero 17
let contador = 1;
contador = contador+1;
console.log(contador);
contador = contador+1;
console.log(contador);
contador = contador+1;
console.log(contador);

//Questão Numero 18
let raio = 5;
let area = PI*(raio**2);
console.log(area);

//Questão Numero 19
//Faria pequenos comentarios de linha unica indicando o que está sendo feito naquela linha de codigo.

//Questão Numero 21
let valorA = 10;
let valorB = 20;
let valorTemp = valorA; // adiciona o valor de valorA
valorA = valorB;
valorB = valorTemp;
console.log(valorA,valorB);

//Questão Numero 22
let peso = 86;
let altura = 1.74;
console.log(peso/(altura**2));

//Questão Numero 23
let temperaturaCelsius = 25;
let fahrenheit = (temperaturaCelsius*(9/5)+32)
console.log(fahrenheit);

//Questão Numero 24
let valor1 = 10;
let valor2 = "10";
console.log(valor1==valor2); //Operador de igualdade converte e iguala os tipos antes de comparar os valores.
console.log(valor1===valor2); //Operador de igualdade estrita compara tanto os valores quantos os tipos.

//Questão Numero 25
let quantidadeTotalDeItensNoCarrinho;
let tipoGalaticoDeVariavelPlanetaria;

//Questão Numero 26
let URL_API = "https://api.example.com";

//Questão Numero 27
// Questão Numero 3 há comentarios indicando como está sendo utilizado a variavel

//Questão Numero 28
let n1 = 10;
let n2 = 5;
let n3 = 3;
console.log(n1*n2*n3);

//Questão Numero 29
let resto = 17%5 ; 
console.log(resto);



