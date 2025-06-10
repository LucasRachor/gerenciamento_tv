class ListarInformacoes {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async execute(usuarioId) {
        return await this.clienteRepository.listarInformacoes(usuarioId);
    }

}

module.exports = ListarInformacoes;