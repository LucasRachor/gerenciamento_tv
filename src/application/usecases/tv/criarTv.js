const Tv = require("../../../domain/entities/Tv");

class CriarTv {
    constructor(tvRepository) {
        this.tvRepository = tvRepository;
    }

    async execute(payload) {
        const tv = new Tv(payload);
        return await this.tvRepository.criarTv(tv);
    }

}

module.exports = CriarTv;