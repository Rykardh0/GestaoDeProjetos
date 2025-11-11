let valor = 100;
let frete = 30;
let total = 0;

const desc10 = "DESC10";
const freteGratis = "FRETEGRATIS";

if(desc10 == "DESC10"){
    total = total+(valor*0.9);
}else{
    total = total+valor;
}


if(freteGratis == "FRETEGRATIS"){
    total = total +(frete-15) 
}else{
    total = total+frete;
}

console.log("Total a pagar:", total);