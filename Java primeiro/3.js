function somarNumeros() {
    var primeironumero = document.getElementById("primeironumero").value;
    var segundonumero = document.getElementById("segundonumero").value;
    var soma = Number(primeironumero) + Number(segundonumero);
    document.getElementById("resultado").innerHTML = "A soma é " + soma;
    }