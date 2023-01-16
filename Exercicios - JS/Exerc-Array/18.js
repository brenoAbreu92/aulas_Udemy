const itens = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150},
    {nome: "Caneta", categoria: "Papelaria", preco:10}
    
    ]
function despesasTotais(itens) {
    var total = 0
    for (let item of itens) 
        total += item.preco   
        return total        
}

console.log(despesasTotais(itens))

