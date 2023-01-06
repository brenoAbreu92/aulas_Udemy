function semana(dia) {
    switch (dia) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia de semana"
        case 7:
            return "Fim de semana"
        default:
            return "Dia ivalido"
    }
}

console.log(semana(1));
console.log(semana(2));
console.log(semana(3));
console.log(semana(4));
console.log(semana(5));
console.log(semana(6));
console.log(semana(7));
console.log(semana('a'));