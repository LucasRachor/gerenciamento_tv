class VincularTv {
    constructor(tvRepository) {
        this.tvRepository = tvRepository;
    }

    async execute(clienteId, tvId) {
        return await this.tvRepository.vincularTv(clienteId, tvId);
    }

}

module.exports = VincularTv;