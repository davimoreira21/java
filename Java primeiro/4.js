function calcularMedia() {
    var primeiranota = parseFloat(document.getElementById("primeiranota").value);
    var segundanota = parseFloat(document.getElementById("segundanota").value);
    var terceiranota = parseFloat(document.getElementById("terceiranota").value);
    var quartanota = parseFloat(document.getElementById("quartanota").value);

    var media = (primeiranota + segundanota + terceiranota + quartanota) / 4;

    document.getElementById("media").innerHTML = "A média final é: " + media;
}primeiranotasegundanotaterceiranota