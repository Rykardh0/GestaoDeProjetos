let ano1 = 2000;
let ano2 = 2020;
let contador = 0;

if(ano1>ano2){
    let ano;
    ano = ano1
    ano1 = ano2
    ano2 = ano
}

while((ano1<=ano2)){
    if ((ano1 % 4 === 0 && ano1 % 100 !== 0) || (ano1 % 400 === 0)) {
        contador= contador+1
        console.log(ano1);
    }
    ano1 = ano1+1;
}