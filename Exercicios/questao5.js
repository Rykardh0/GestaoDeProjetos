let horaEntrada;
let horaSaida;
let tempo

horaEntrada = 10 ;
horaSaida = 13 ;
tempo = horaSaida-horaEntrada;

if(tempo <=1 ){
    console.log("Valor a pagar: R$10,0");
}else if(tempo>3){
        console.log("Valor a pagar: R$30,0");
}else{
        console.log("Valor a pagar: R$20,0");
}