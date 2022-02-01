//O valor do investimento deve ser 5% da doação, se for maior que 1000, passa a ser 15%.


let doacao = parseFloat(prompt("Digite o valor da doação?"));
let investimento;

if (doacao > 1000) {

    investimento=doacao*0.15;

}
else {

    investimento=doacao*0.05;

}
document.getElementById("investimento").innerHTML = investimento.toString();