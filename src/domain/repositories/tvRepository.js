class TvRepository {

    async criarTv(payload) {
        throw new Error('contratado')
    }

    async excluirTv(tvId) {
        throw new Error('contratado!')
    }

    async listarTvs() {
        throw new Error('contratado')
    }

    async vincularTv(clienteId, tvId) {
        throw new Error('contratado')
    }

    async listarClientesTvs(usuarioId) {
        throw new Error('contratado')
    }

}

module.exports = TvRepository;