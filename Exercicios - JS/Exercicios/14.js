
function tipo(fruta) {
    switch (fruta) {
        case 'Maça':
            fruta = "Maça"
            return 'Não vendemos ' + fruta + ' aqui'
        case 'Kiwi':
            fruta = "Kiwi"
            return "Estamos com escassez de " + fruta
        case 'Melancia':
            fruta = "Melancia"
            return `Aqui está, ${fruta} são 3 reais o quilo`
        default:
            return "Fruta não cadastrada"
    }
}
console.log(tipo('Maça'))
console.log(tipo('Kiwi'))
console.log(tipo('Melancia'))
console.log(tipo(4))

