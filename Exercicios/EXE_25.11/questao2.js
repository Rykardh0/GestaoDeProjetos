let palavras = ["aviao", "carro", "Absoluto", "dia", "luz", "maremoto","Brasil","https://www.google.com"];

console.log(palavras.filter(palavras => palavras.length > 5));

console.log(palavras.filter(palavras => palavras[0] === 'B'));

console.log(palavras.filter(palavras => palavras.match('sol')));

console.log(palavras.filter(palavras => palavras.includes('https://')));