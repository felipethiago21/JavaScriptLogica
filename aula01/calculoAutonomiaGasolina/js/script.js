let kmin=parseFloat(prompt("Digite a quantidade de KM ao iniciar a corrida"));
let kmche=parseFloat(prompt("Digite a quantidade de KM ao chegar ao posto"));
let gas=parseFloat(prompt("Digite a quantidade de litros reabastecido"));

alert (`Média de KM/L: ${kmche-kmin/gas}`);