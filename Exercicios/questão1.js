// Crie um fluxograma que permita ao usuário digitar usuário e senha até três vezes. Se acertar antes
// disso, deve ser redirecionado ao sistema. Caso erre todas, deve ser bloqueado.

let usuario 
let senha 
const bdusuario = ["Ricardo","Lopes"];
const bdsenha = ["123456","654321"];
let contador = 0;
let chances = 0;
let validador = true;

while(chances<3){
    usuario =prompt('Digite seu usuario');
    senha =prompt('Digite sua senha');

    validador = bdusuario.includes(usuario) && bdsenha.includes(senha);
    if(validador){
        console.log("Validado")
        break
    }else{
        console.log("Usuario ou Senha Incorreta")
        chances=chances+1;
    }
}