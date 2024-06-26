console.log(module.exports)    // Saída: {}
console.log(module.exports === this)    // Saída: true
console.log(module.exports === exports)     // Saída: true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)    // Saída: { a: 1, b: 2, c: 3 }

exports = {
    nome: 'Teste'
}

console.log(module.exports)    // Saída: { a: 1, b: 2, c: 3 }

module.exports = { publico: true }