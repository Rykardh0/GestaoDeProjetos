let palavra = "ParaLeLepipedosAutralopiteCOS"

const vogaisEncontradas = palavra.match(/[aeiouAEIOU]/g)
console.log(vogaisEncontradas.length);

const consoanteEncontradas = palavra.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)
console.log(consoanteEncontradas.length);
