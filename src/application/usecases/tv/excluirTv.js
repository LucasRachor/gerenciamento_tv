class ExcluirTv {
    constructor(tvRepository) {
        this.tvRepository = tvRepository;
    }

    async execute(tvId) {
        return await this.tvRepository.excluirTv(tvId);
    }

}

module.exports = ExcluirTv;