const sequencia = {
    _valor1: 1, //convenção
    get valor() { return this._valor1++},
    set valor(valor){
        if (valor > this.valor) {
            this._valor1 = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)



