function objParaArray(objeto) {
    const resultado =[]
     for (let chave in objeto)
    resultado.push([chave, objeto[chave]])
    
    return resultado
}

console.log(objParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}));


