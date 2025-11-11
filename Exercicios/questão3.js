// questão 3 - Fluxograma para sistema de fila em um banco
// Você deve criar um fluxograma para um gerenciador de fila de atendimento:
// ● Se for idoso ou gestante, entra na fila prioritária
// ● Se não, entra na fila comum
// ● O atendimento chama primeiro da fila prioritária, e depois da comum, alternando se houver


const Qtd_pessoas = 50;
let contador1 = 0;
let senhasPreferenciais = 10;
let senhasNormais = 40;
let senhaAtual = 'p';
while (contador1 < 50) {
    if(senhasPreferenciais > 0 && senhaAtual == 'p' ){
        senhasPreferenciais--;
        senhaAtual = 'n'
        contador1++;
        console.log("atendimento senha preferencial ", contador1);
    } else {
        if (senhasNormais > 0) {
            senhasNormais--;
            contador1++;
            console.log("atendimento senha normal", contador1);
        }
        senhaAtual = 'p'
    }
}