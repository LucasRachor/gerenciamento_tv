const User = require('../../../domain/entities/User')

class CriarUsuario {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(usuarioData) {
        const usuario = new User(usuarioData)
        return await this.userRepository.criarUsuario(usuario)
    }
}

module.exports = CriarUsuario;