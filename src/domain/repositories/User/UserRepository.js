class UserRepository {

    async criarUsuario(usuarioData) {
        throw new Error("Contratado!")
    }

    async listarUsuarios() {
        throw new Error("Contratado!")
    }

    async listarComNome(nomeDeUsuario) {
        throw new Error("Contratado!")
    }
}

module.exports = UserRepository;