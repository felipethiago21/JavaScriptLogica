//Neste script, o banco oferece um crédito para o cliente conforme seu saldo médio.

let saldo = parseFloat(prompt("Digite o valor do saldo:"));
let credito;

if(saldo<=200){

    credito=0;

}else if (saldo<=400){

    credito=saldo*0.2;

}else if (saldo<=600){

    credito=saldo*0.3;

}else {

    credito=saldo*0.4;

}
document.getElementById("credito").innerHTML=`credito: R$: ${credito}`;