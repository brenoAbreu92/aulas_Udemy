const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
]

//console.log(produtos.filter(function (p) {
    //return p.preco > 10
    //return false

//}))

const caro  = produtos => produtos.preco > 17
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))

// opção chat gpt
const fragilidade = produtos.filter(function (p) {
    return p.fragil
});
console.log(fragilidade.filter(function(f){
    return f.preco > 17

}))