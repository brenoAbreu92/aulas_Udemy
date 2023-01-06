function triangulo(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) {
        return 'Equilátero'
    } else if (l1 == l2 || l2 == l3 || l1 == l3) {
        return 'isosceles'
    } else {
        return 'Escaleno'
    } {
        
    }
    console.log(triangulo(5,6,7))
}
console.log(triangulo(5,6,7))
console.log(triangulo(5,6,6))
console.log(triangulo(5,5,5))