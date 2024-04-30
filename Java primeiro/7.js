function calcularArea() {
    var lado = document.getElementById('inputLado').value;
    var area = Math.pow(lado, 2);
    var dobrodaArea = area * 2;
    document.getElementById('resultado').innerHTML = "A área do quadrado de lado " + lado + " é " + area + ". O dobro desta área é " + dobrodaArea + ".";
}