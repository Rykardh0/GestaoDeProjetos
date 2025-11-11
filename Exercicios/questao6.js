const senha = "1234567@Aa";
let maiuscula = /[A-Z]/;
let minuscula = /[a-z]/;
let simbolo = /[\W]/;

if(!senha.length >= 8){
    console.log("Senha Invalida; tamanho invalido");
}else if(!maiuscula.test(senha)){
    console.log("Senha Invalida; Letra Maiuscula Faltando");
}else if(!minuscula.test(senha)){
    console.log("Senha Invalida; Letra Minuscula Faltando");
}else if(!simbolo.test(senha)){
    console.log("Senha Invalida, Caracter Faltando Faltando");
}else{
    console.log("Validado")
}

