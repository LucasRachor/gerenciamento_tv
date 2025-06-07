class ClienteRepository {

    async criarCliente(payload, usuarioId) {
        throw new Error('contradado!')
    }

    async listarClientes(usuarioId) {
        throw new Error('contratado!')
    }

    async excluirCliente(clienteId) {
        throw new Error('contratado!')
    }

    async editarCliente(payload, clienteId) {
        throw new Error('contratado!')
    }

}

module.exports = ClienteRepository;