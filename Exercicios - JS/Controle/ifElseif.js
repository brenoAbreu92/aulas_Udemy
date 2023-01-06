Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResuldado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    }
    else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    }else{
        console.log('Nota Invalida')
    }
}
imprimirResuldado(10)
imprimirResuldado(8)
imprimirResuldado(6)
imprimirResuldado(2)
imprimirResuldado(-1)
imprimirResuldado(11)