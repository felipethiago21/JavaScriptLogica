function calcularTabuada() {
  let num = parseInt(document.getElementById("num").value);
  let res;
  let i = 1;
  let result = "";

  while (i <= 10) {
    res = num * i;
    result += res + "<br>";
    i++;
  }
  document.getElementById("resultado").innerHTML = result;
}
