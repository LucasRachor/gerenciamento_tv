class ModificarUsuario {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(usuarioId, payload) {
        return await this.userRepository.modificarUsuario(usuarioId, payload)
    }

}

module.exports = ModificarUsuario;