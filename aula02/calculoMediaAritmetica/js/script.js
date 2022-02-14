//Se a nota for maior que 7 = aprovado
//Se a nota for maior ou igual a 4 = Em prova final
//Caso for menor que essas notas = reprovado


let n1 = parseFloat(prompt("Digite a nota 1"));
let n2 = parseFloat(prompt("Digite a nota 2"));
let n3 = parseFloat(prompt("Digite a nota 3"));
let ma = (n1+n2+n3)/3;

if (ma >= 7) {

    document.getElementById("situação").innerHTML = `Aprovado com média ${ma}`;

} else if (ma >= 4) {

    document.getElementById("situação").innerHTML = `Em prova final com média ${ma}`;

} else {

    document.getElementById("situação").innerHTML = `Reprovado com média ${ma}`;

}