const Cliente = require('../../../domain/entities/Cliente')

class CriarCliente {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(payload, usuarioId) {
        const cliente = new Cliente(payload)
        return await this.userRepository.criarCliente(cliente, usuarioId);
    }

}

module.exports = CriarCliente;