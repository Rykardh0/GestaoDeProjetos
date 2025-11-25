let ent1 = 'arara';
let validade;

for(i=0; i<ent1.length; i=i+1){
    validade = ent1[i]===ent1[(ent1.length-1)-i]
    console.log("letra ",ent1[i],"index ",i)
    console.log("letra ",ent1[(ent1.length-1)-i],"index ",(ent1.length-1)-i)
    if(!validade){
        console.log("Não é Palindromo");
        break
    }
}
console.log(validade)

