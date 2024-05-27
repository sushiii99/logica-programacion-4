function generateFibonacci() {
    let numInput = document.getElementById('numInput').value;
    let number = parseFloat(numInput);

    // Verificar si el input es un número entero válido mayor que 0
    if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
        alert("Por favor, ingrese un número entero válido mayor que 0.");
        return;
    }

    // Generar la serie de Fibonacci
    let fibonacciSeries = [];
    if (number === 1) {
        fibonacciSeries = [0];
    } else if (number === 2) {
        fibonacciSeries = [0, 1];
    } else {
        fibonacciSeries = [0, 1];
        for (let i = 2; i < number; i++) {
            let nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
            fibonacciSeries.push(nextNumber);
        }
    }

    // Imprimir la serie en la consola
    console.log(fibonacciSeries.join(', '));

    // Mostrar la serie en el DOM
    let seriesDiv = document.getElementById('fibonacciSeries');
    seriesDiv.innerHTML = `Serie de Fibonacci: ${fibonacciSeries.join(', ')}`;
}
