let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)


console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!(isAtivo = false))
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('pra finalizar...')
console.log(!!(''|| null || 0 || ' '))

let nome = 'Breno'
console.log(nome || 'Desconhecido')

