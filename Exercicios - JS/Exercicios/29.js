function contaNumeros(vetor) {
    qntNum = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[1] <= 20) {
            qntNum++

        }

    }
return `${qntNum} numeros dentro do intervalo`
}

vetor = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(contaNumeros(vetor))