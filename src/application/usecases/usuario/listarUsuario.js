class ListarUsuarios {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute() {
        return await this.userRepository.listarUsuarios();
    }
}

module.exports = ListarUsuarios;