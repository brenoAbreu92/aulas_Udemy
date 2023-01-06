
function calculadora(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2

        default:
            return "operação invalida"
            break;
    }


}
console.log(calculadora('+', 2, 3))
console.log(calculadora('-', 2, 3))
console.log(calculadora('*', 2, 3))
console.log(calculadora('/', 2, 3))
console.log(calculadora('p', 2, 3))
