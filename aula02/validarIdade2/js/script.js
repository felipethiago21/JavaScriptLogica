//Neste js estamos validando a idade do passageiro e uma van e indicando se podem ir votar e embarcar.

let idade = parseFloat(prompt("Digite sua idade"));

if (idade < 16) {

    document.getElementById("situação").innerHTML = "Você não pode votar e nem embarcar!";

} else if (idade < 18) {

    document.getElementById("situação").innerHTML = "Seu voto é facultativo.";

} else {

    document.getElementById("situação").innerHTML = "Voto obrigatório, pode embarcar";

}