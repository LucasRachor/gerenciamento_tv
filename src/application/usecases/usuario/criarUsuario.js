const Usuario = require('../../../domain/entities/Usuario');

class CriarUsuario {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(payload) {
        const usuario = new Usuario(payload)
        return await this.userRepository.criarUsuario(usuario)
    }
}

module.exports = CriarUsuario;