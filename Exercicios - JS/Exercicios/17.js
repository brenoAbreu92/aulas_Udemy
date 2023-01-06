
let novoSalario = 0
function aumento(salarioAtual, plano) {
    switch (plano) {
        case 'a':
            console.log(`Novo salario é ${Math.floor(salarioAtual  * 1.1)}`)
            break;
        case 'b':
            console.log(`Novo salario é ${Math.floor((salarioAtual  * 1.15))}`)
            break;
        case 'c':
            console.log(`Novo salario é ${Math.floor(salarioAtual  * 1.2)}`)
            break;

        default:
            console.log('Plano invalido')
            break;
    }
}
aumento(1000, 'a')
aumento(1000, 'b')
aumento(1000, 'c')
aumento(1000, 'ad')
