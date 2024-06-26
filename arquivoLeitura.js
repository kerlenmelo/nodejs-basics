const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


// Especifimante para o formanto '.json', uma forma mais simples de ler o arquivo:
const config = require('./arquivo.json')    // Necessário informar a extensão '.json', por não ser '.js' padrão

console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Contéudo da pasta...')
    console.log(arquivos)
})