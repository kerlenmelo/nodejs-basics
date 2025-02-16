// Middleware Pattern OU Chain Of Responsibility

const passo1 = (ctx, next) => {        // ctx é o contexto ou obj que será passado de um middleware para outro
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)    // Saída: { valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }