class Lancamentos {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }
    
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.Lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamentos ('Salario', 45000)
const contaDeluz = new Lancamentos('Luz', -220)
const contaDeAgua = new Lancamentos('Luz', -80)

const contas = new CicloFinanceiro (6,2022)
contas.addLancamentos(salario, contaDeluz, contaDeAgua)
console.log(contas.sumario())
