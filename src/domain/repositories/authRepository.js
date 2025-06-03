class AuthRepository {

    async login(payload) {
        throw new Error('Método não contratado!')
    }

    async listarComEmail(email) {
        throw new Error('Método não contratado')
    }

    async verificarToken(token) {
        throw new Error('Método não contratado!')
    }

}

module.exports = AuthRepository;