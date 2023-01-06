function planoSaude(idade) {
    const valor = 100
    let adicional = 0 
switch (idade) {
    case 9:
        adicional = 80
        if (idade < 10 ) {
            console.log(`Valor do plano é R$ ${valor + adicional}`)
        }
        break;
        case 30:
        adicional = 50
        if (idade > 10  < 30  ) {
            console.log(`Valor do plano é R$ ${valor + adicional}`)
        }
        break;
        case 60:
        adicional = 95
        if (idade < 600 ) {
            console.log(`Valor do plano é R$ ${valor + adicional}`)
        }
        break;
        case 100:
        adicional = 130
        if (idade = 100 ) {
            console.log(`Valor do plano é R$ ${valor + adicional}`)
        }
        break;

    default:
        break;
}    

}
planoSaude(9)
planoSaude(30)
planoSaude(60)
planoSaude(100)
