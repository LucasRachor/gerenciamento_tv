class ListarClientesTvs {
    constructor(tvRepository) {
        this.tvRepository = tvRepository;
    }

    async execute(usuarioId) {
        return await this.tvRepository.listarClientesTvs(usuarioId);
    }

}

module.exports = ListarClientesTvs;