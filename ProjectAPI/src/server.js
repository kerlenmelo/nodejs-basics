const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBank = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(dataBank.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBank.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBank.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)   // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = dataBank.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)   // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBank.excluirProduto(req.params.id)
    res.send(produto)   // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})