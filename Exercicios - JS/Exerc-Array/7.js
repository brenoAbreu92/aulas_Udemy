function comparar(minino,maximo,numero,inclusivo = false) {
        if (inclusivo) {
       return numero >= minino && numero <= maximo  
    } 
    return numero >= minino && numero <= maximo  
}

console.log(comparar(10,100,50))
console.log(comparar(16,100,160))
console.log(comparar(3,150, 150))
console.log(comparar(3,3,150, true))