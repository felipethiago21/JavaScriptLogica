let doacao=parseFloat(prompt("Digite o valor da doação em dólares"));
let valorDolar=parseFloat(prompt("Digite o valor da cotação do dólar"));
let valorEmReais=doacao*valorDolar;

alert (`O valor da doação em reais é R$:${valorEmReais} baseado na cotação atual de $${valorDolar}`);


