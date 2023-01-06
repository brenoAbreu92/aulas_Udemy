function cardapio(cod, qnt, valor) {
    switch (cod) {
        case 100:
            return qnt * valor
        case 200:
            return qnt * valor
        case 300:
            return qnt * valor
        case 400:
            return qnt * valor
        case 500:
            return qnt * valor
        case 600:
            return qnt * valor
            break;

        default:
            return "Não existe"
            break;
    }




}
console.log(cardapio(100, 2, 3.00))
console.log(cardapio(200, 2, 4.00))
console.log(cardapio(300, 2, 5.50))
console.log(cardapio(400, 2, 7.50))
console.log(cardapio(500, 2, 3.50))
console.log(cardapio(600, 2, 2.80))
console.log(cardapio(700, 2, 3.00))
