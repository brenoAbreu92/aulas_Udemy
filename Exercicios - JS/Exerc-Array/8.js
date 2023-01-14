function multiplicar(num1, num2) {
    let resultado = 0
    for (let i = 0; i < num2; i++)
        resultado += num1
    console.log(resultado)
    return resultado
}

multiplicar(5, 4)