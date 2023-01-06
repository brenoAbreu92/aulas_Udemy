function bissexto(ano) {
    if( (ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0) ) {
        return true
    } else  {
        return false
    } 
    
}

console.log(bissexto(1992))
console.log(bissexto(2000))
console.log(bissexto(1900))



