let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.11, 2.22, 3.33, 4.44]
function concatVetor(...args) {
    resulta = []
    for (let i = 0; i < arguments.length; i++) {
        resulta = resulta.concat(arguments[i])
    }
    return resulta
}
console.log(concatVetor(vetorInteiro, vetorDouble))
console.log(concatVetor(vetorDouble, vetorString))