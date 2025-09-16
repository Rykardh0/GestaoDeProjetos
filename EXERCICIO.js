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

//Questão Numero 4
// (Uncaught TypeError: Assignment to constant variable.) Variaveis do tipo const não podem ser reatribuidas.
//PI = 3,14159; 
//console.log(PI);

//Questão Numero 5
let num1 = 15;
let num2 = 7;
let resultadoSoma = num1+num2;
console.log(resultadoSoma);
