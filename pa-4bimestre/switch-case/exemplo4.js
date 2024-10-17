//Desenvolvr um algoritmo que deverá ter opções de cálculo: SOMA, MULTIPLICAÇÃO E DIVISÃO. Conforme a escolha do usuário e de acordo com dois valores numéricos atribuídos, o cálculo deverá ser realizado. Bom trabalho!

let num1 = 12;
let num2 = 24;

let op = "DIVISÃO"

console.log ("---------------------------");
console.log ("Digite 1: SOMA");
console.log ("Digite 2: SUBTRAÇÃO");
console.log ("Digite 3: MULTIPLICAÇÃO");
console.log ("Digite 4: DIVISÃO");
console.log ("-------------------------");
console.log ("");

switch(op){
    case "SOMA":
        console.log(`O resultado da soma é, ${num1+num2}`);
        break;
    case "SUBTRAÇÃO":
        console.log(`O resultado da subtração é, ${num1-num2}`);
        break;
    case "MULTIPLICAÇÃO":
        console.log(`O resultado da multiplicação é, ${num1*num2}`);
        break;
    case "DIVISÃO":
        console.log(`O resultado da divisão é, ${num1/num2}`);
        break;
    
    default:
        console.log("Inválido")    
        
}