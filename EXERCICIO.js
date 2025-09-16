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