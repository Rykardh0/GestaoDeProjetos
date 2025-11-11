// . Fluxograma para cálculo de imposto de renda
// Crie um fluxograma que:
// ● Solicita o salário mensal
// ● Calcula o salário anual
// ● Aplica a alíquota:
// ○ Até R$ 28.559,70: isento
// ○ De R$ 28.559,71 até R$ 60.000: 15%
// ○ Acima de R$ 60.000: 27,5%
// ● Informa o valor do imposto



const SalarioM = -1500;
if (SalarioM < 1){
    console.log("salario Negativo, impossivel calcular imposto")
} else{

    const SalarioA = SalarioM * 13;
    
    
    if(SalarioA <= 28559.70){
        console.log("Isento");
    } else if (SalarioA >= 28559.71 && SalarioA <= 60000){
        console.log("Valor a pagar - 15%", SalarioA*0.15);
        } else if (SalarioA > 60000){
        console.log("Valor a pagar - 27,5%", SalarioA*0.275);
        } 
}