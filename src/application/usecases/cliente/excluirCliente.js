class ExcluirCliente {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async execute(clienteId) {
        return await this.clienteRepository.excluirCliente(clienteId);
    }

}

module.exports = ExcluirCliente;