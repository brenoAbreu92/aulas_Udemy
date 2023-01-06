
const pessoa = {
    nome: 'Ana',
    idade: 8,
    endereco: {
        lougradouro: 'Rua A',
        Numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobreNome, bem = true} = pessoa
console.log(sobreNome, bem)

const {endereco: {lougradouro, Numero, cep }} = pessoa
console.log(lougradouro, Numero, cep)

