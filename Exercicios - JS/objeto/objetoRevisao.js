// coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 110

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    nome: 'Logan',
    valor: 13000,
    proprietario: {
        nome: 'Sergio',
        idade: 60,
        endereco: {
            logradouro: 'Rua G',
            numero: 301
        }
    }, condutores: [{
        nome: 'Breno',
        idade: 30,
    }, {
        nome: 'Marina',
        idade: 26
    }],
    calcularValorSeguro: function () {
        //... 
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua A'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
