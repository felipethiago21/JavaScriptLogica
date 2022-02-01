//AC vale 20% da média
//AG vale 10% da média
//AT vale 70% da média

let ac=parseFloat(prompt("Digite a nota de AC"));
let ag=parseFloat(prompt("Digite a nota de AG"));
let at=parseFloat(prompt("Digite a nota de AT"));
let media=(ac*2+ag+at*7)/10;

alert (`Média: ${media}`);