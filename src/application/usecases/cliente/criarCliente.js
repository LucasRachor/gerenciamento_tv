const Cliente = require('../../../domain/entities/Cliente')

class CriarCliente {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async execute(payload, usuarioId) {
        const cliente = new Cliente(payload)
        return await this.clienteRepository.criarCliente(cliente, usuarioId);
    }

}

module.exports = CriarCliente;