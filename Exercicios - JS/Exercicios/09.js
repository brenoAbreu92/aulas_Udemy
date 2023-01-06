function sistemaNotas(nota) {
   let notaCorrigida = arredondar(nota)
     if (nota >= 40) {
        console.log("Aprovado " + notaCorrigida)
        
    }else  {
        console.log("Reprovado "+ notaCorrigida)      
    }     
}
function arredondar( notaArrendondada) {
    if (notaArrendondada % 5 > 2) {
        return Math.ceil(notaArrendondada / 5) * 5
    } else {
        return notaArrendondada       
    }
}
sistemaNotas(100)
sistemaNotas(30)
sistemaNotas(38)
sistemaNotas(88)
sistemaNotas(61)