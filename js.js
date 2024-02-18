
function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}


function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}


function imprimirFibonacci() {
    const numeroInput = document.getElementById('numeroInput');
    const resultadoDiv = document.getElementById('resultado');
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.textContent = 'Por favor, ingrese un número válido.';
        return;
    }

    const serie = fibonacci(numero);
    resultadoDiv.textContent = "Serie de Fibonacci: " + serie.join(", ");
}
