class UserRepository {

    async criarUsuario(payload) {
        throw new Error("contratado!")
    }

    async modificarUsuario(usuarioId, payload) {
        throw new Error("contratado!")
    }

    async excluirUsuario(usuarioId) {
        throw new Error("contratado!")
    }

    async listarUsuarios() {
        throw new Error("contratado!")
    }

}

module.exports = UserRepository;