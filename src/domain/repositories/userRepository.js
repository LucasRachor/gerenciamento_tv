class UserRepository {

    async criarUsuario(usuarioData) {
        throw new Error("contratado!")
    }

    async listarUsuarios() {
        throw new Error("contratado!")
    }

    async listarComEmail(email) {
        throw new Error("contratado!")
    }
}

module.exports = UserRepository;