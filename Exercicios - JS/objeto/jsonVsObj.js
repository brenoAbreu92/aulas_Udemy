const obj = { a: 1, b: 2, c: 3, soma() { return a + b + this.c } }
console.log(obj)
console.log(JSON.stringify(obj)) // Json passa soemnte dados, por isso a function não printou

//console.log(JSON.parse("{a:1, b:2, c:3}"))
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1.7, "b":"String", "c":true, "d": {}, "e":[] }'))

