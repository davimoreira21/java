function calcularSalario() {
    var valorHora = document.getElementById('inputValorHora').value;
    var horasTrabalhadas = document.getElementById('inputHorasTrabalhadas').value;
    var salario = valorHora * horasTrabalhadas;
    document.getElementById('resultado').innerHTML = "O  seu salário neste mês é " + salario.toFixed(2) + ".";
}