function paresImpares(vetorNumeros) {
    let qntImpares = 0
    let qntPares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qntPares++
        } else {
            qntImpares++
        }

    }
    console.log(`${qntPares} números pares e ${qntImpares} números ímpares.`)

}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)