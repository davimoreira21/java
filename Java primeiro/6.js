function calcularArea() {
    var r = document.getElementById('inputRaio').value;
    var a = Math.PI * Math.pow(r, 2);
    document.getElementById('resultado').innerHTML = "A área do círculo de raio " + r + " é " + a.toFixed(2) + ".";
}