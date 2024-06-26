// Uma factory retorna um novo Objeto (uma nova instância)
module.exports = () => {
    return {
        valor: 1,
        incrementar() {
            this.valor++
        }
    }
}