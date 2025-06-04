class ExcluirUsuario {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(usuarioId) {
        return await this.userRepository.excluirUsuario(usuarioId);
    }

}

module.exports = ExcluirUsuario;