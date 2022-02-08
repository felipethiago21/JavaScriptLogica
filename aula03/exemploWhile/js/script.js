//5! = 1*2*3*4*5 Formula fatorial

function fatorial() {
  let num = parseInt(document.getElementById("valor").value);
  let fat = 1;
  let i = 1;
  while (i <= num) { // Verifica se o numero é verdadeiro ou falso, e assim calcula o proximo
    fat = fat * i;
    i++; // Incrementa e faz o i virar 2
  }
  document.getElementById("fat").innerHTML = fat.toString();
}
