document.addEventListener('DOMContentLoaded', function() {
    var num1Input = document.getElementById('num1');
    var operacaoInput = document.getElementById('operacao');
    var num2Input = document.getElementById('num2');
    var resultadoOutput = document.getElementById('resultado');

    num1Input.value = '';
    operacaoInput.value = '';
    num2Input.value = '';
    resultadoOutput.textContent = '';
});

function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case 'x':
            resultado = num1 * num2;
            break;
        case '%':
            resultado = num1 / num2;
            break;
            case 'q':
                resultado =  Math.sqrt(num1);
                break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}