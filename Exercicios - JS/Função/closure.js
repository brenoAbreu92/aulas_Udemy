/* 
Closure é o escopo criado quando uma funcção é declarada
Esse escopo permite a função acessar as variaveis externas á função
Contexto lexico em ação!
*/


const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())





