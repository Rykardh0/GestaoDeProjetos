let nota1 = 5;
let nota2 = 5;
let media;
let recuperacao = 10;

if(!(nota1<0 || nota1>10 && nota2<0 || nota2>10) ){
    media = (nota1+nota2)/2

    if(media<4){
        console.log("Reprovado");
    }else if(media>7){
           console.log("Aprovado");
    }else{
        if(!(recuperacao<0 && recuperacao>10)){
        media = (media+recuperacao)/2
        media >= 6 ? console.log('Aprovadoo') : console.log('Reprovadoo')
        }
    }

}else{
    console.log("Nota invalida");
}

