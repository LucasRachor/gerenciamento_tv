class ListarClientes {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async execute(usuarioId) {
        return await this.clienteRepository.listarClientes(usuarioId);
    }

}

module.exports = ListarClientes;