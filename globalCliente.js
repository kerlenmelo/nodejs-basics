require('./global')    // Uma vez importado, fica disponível para toda a aplicação

console.log(MinhaApp.saudacao())    // Saída: Estou em todos os lugares!

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)    // Saída: Eita!
// Objeto ficou passivel de ser modificado. Uma alternativa é utilizar o Object.freeze()
