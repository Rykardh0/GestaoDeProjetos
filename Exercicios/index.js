let array1a1000 = []; 
let arrayPar = [];
let arrayImpar = [];
let contador = 1;

while(contador<=1000){
    array1a1000[contador-1] = contador;
    if(contador%2 ===0){
        arrayPar[contador-1] = contador
        arrayImpar[contador-1] = 0;
    }else{
        arrayImpar[contador-1] = contador
        arrayPar[contador-1] = 0;
    }
    contador = contador+1;

}
console.log(array1a1000);
console.log(arrayPar);
console.log(arrayImpar);