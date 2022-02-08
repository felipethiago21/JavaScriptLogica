let n1 = parseFloat(prompt("Digite a nota 1:"));
let n2 = parseFloat(prompt("Digite a nota 2:"));
let media = (n1+n2)/2;
let aulasDadas = parseInt(prompt("Digite a quantidade de aulas dadas:"));
let aulaAssistidas = parseInt(prompt("Digite a quantidade de aulas assistidas:"));
let freq = (aulaAssistidas/aulasDadas)*100;

if (media >= 7 && freq >= 75) {

    document.getElementById("situacao").innerHTML=`Àprovado com média ${media} e frequência de ${freq}%`;

} else {

    document.getElementById("situacao").innerHTML=`Retido com média ${media} e frequência de ${freq}%`;

}
