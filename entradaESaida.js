// Process: Entrada e Saída Padrão
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')    // Windows a quebra de linha é \r\n

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}