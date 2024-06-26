// Entendendo o this
console.log(this === global)    // Saída: false
console.log(this === module)    // Saída: false

console.log(this === module.exports)    // Saída: true
console.log(this === exports)    // Saída: true

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)        // Saída: false
    console.log(this === module.exports)        // Saída: false
    console.log(this === global)        // Saída: true
}

logThis()   // Dentro de uma função o this não aponta para exports nem para module.exports e sim para global