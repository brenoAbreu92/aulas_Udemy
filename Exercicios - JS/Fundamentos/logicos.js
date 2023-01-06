function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // exemplo de OU
    const comprarTV50 = trabalho1 && trabalho2 // exemplo de I
    // const comprarTV32 = !! (trabalho1 != trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // exemplo do OU EXCLUSIVO
    const manterSaudavel = !comprarSorvete // exemplo de OU Negação Logica
    return {
        comprarSorvete, comprarTV50, comprarTV32, manterSaudavel
    }

}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
