function receberSomenteOsParesDeIndicesPares(numero) {
    let pares = []
    for (let i = 0; i < numero.length; i +=2) {
        const numeroPar = numero[i] % 2 === 0
        if (numeroPar) {
            pares.push(numero[i])
    
        }       
    }
    
    return pares
}



 console.log(receberSomenteOsParesDeIndicesPares([1,2,3,4]))
