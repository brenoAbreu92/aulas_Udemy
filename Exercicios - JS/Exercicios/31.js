function contaNegativo(vetor) {
    let menor = 0
    for (let i = 0; i < vetor.length; i++) {
        if (menor > vetor[i]) {
            menor++
        }
    }
    return menor
}

vetor = [-10, 11, 12, -13, 14, 15, -16, 17, -18, 19, -20]
console.log(contaNegativo(vetor))
