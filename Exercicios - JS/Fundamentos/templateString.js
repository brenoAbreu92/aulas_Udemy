const nome = 'Breno'

const concatenacao = 'Ola ' + nome  + '!'

const template = `
ola 
${nome}!`
console.log(concatenacao, template)

//expressoes

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase(0)
console.log(`ei .. ${up('cuidado')}!!!`)