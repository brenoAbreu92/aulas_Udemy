function contaNumeros(vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if (vetor[i] < menor ) {
                menor = vetor [i]
            }
        }

    }
    return [maior, menor]
}

vetor = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(contaNumeros(vetor))