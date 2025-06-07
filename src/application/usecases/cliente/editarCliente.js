class EditarCliente {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async execute(payload, clienteId) {
        return await this.clienteRepository.editarCliente(payload, clienteId);
    }

}

module.exports = EditarCliente;