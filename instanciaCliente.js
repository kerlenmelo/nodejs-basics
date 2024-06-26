const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()  // Parênteses são necessários pois o require('./instanciaNova') é uma função que retorna um obj
const contadorD = require('./instanciaNova')()

contadorA.incrementar()    // contadorA.valor = 2
contadorA.incrementar()    // contadorA.valor = 3
console.log(contadorA.valor, contadorB.valor)    // Saída: 3 3

contadorC.incrementar()    // contadorC.valor = 2
contadorC.incrementar()    // contadorC.valor = 3
console.log(contadorC.valor, contadorD.valor)    // Saída: 3 1