let dobro = function (a){
    return 2 * a
}
dobro = (a) => {
return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let Ola = function () {
    return  'Ola'
}

Ola = () => 'Ola'
console.log(Ola())
