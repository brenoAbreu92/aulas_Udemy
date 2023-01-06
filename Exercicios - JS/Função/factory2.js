
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
        
    }
}

console.log(criarProduto('Notebook', 258,33))
console.log(criarProduto('elular', 278,33))


