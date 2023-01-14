function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    console.log(copia)
    return copia
    }
    
    removerPropriedade('Caneta', 'cor')




