// Fluxograma para um quiz de 5 perguntas com pontuação final
// Crie um fluxograma de um quiz onde o usuário responde 5 perguntas. Ao final, o sistema deve mostrar:
// ● A pontuação total (1 ponto por acerto)
// ● Uma mensagem personalizada:
// ○ 0 a 2 pontos: "Tente novamente"
// ○ 3 a 4 pontos: "Muito bem"
// ○ 5 pontos: "Excelente"


const qtdPerguntas = 5;
let pontuacao = 0;
let contador = 0;
// while (contador < 5) { 
//     contador = contador + 1;
//     console.log("Responda a pergunta ", contador);
// }
console.log("Responda a pergunta 1: qualquer pergunta");
const respostaPergunta1 = true;

if(respostaPergunta1){
    pontuacao = pontuacao+1;
}

console.log("Responda a pergunta 2: qualquer pergunta");
const respostaPergunta2 = true;

if(respostaPergunta2){
    pontuacao = pontuacao+1;
}

console.log("Responda a pergunta 3: qualquer pergunta");
const respostaPergunta3 = false;

if(respostaPergunta3){
    pontuacao = pontuacao+1;
}

console.log("Responda a pergunta 4: qualquer pergunta");
const respostaPergunta4 = false;

if(respostaPergunta4){
    pontuacao = pontuacao+1;
}

console.log("Responda a pergunta 5: qualquer pergunta");
const respostaPergunta5 = false;

if(respostaPergunta5){
    pontuacao = pontuacao+1;
}
// pontuacao = 10;
if (pontuacao >=0 && pontuacao <=2) {
    console.log("Tente Novamente");
} else if(pontuacao >= 3 && pontuacao <= 4) {
    console.log("Muito bem");
} else if( pontuacao == 5) {
    console.log("Excelente");
} else {
    console.log("pontuação inválida!");
    
}