const elemento = ["Javascript", 1, "3", "Web", 20]

function filtra(elemento) {
    return elemento.filter(item => typeof item === "number")
}

console.log(filtra(elemento))
