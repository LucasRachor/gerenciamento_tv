class ListarTvs {
    constructor(tvRepository) {
        this.tvRepository = tvRepository;
    }

    async execute() {
        return await this.tvRepository.listarTvs();
    }

}

module.exports = ListarTvs;