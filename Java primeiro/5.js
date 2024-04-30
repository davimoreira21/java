function converterParaCentimetros() {
    var m = document.getElementById('inputMetros').value;
    var cm = m * 100;
    document.getElementById('resultado').innerHTML = m + " metros é igual a " + cm + " centímetros.";
}