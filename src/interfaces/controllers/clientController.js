class ClientController {
    constructor({ CriarCliente }) {
        this.criarCliente = CriarCliente;
    }

    async criar(req, res) {
        try {
            const payload = req.body;
            const usuarioId = req.usuarioId;

            const criar = await this.criarCliente.execute(payload, usuarioId);

            if (!criar) {
                res.status(400).json({
                    error: error.message
                })
            }

            res.status(201).json({
                mensagem: "Cliente cadastrado com sucesso!"
            })

        } catch (error) {
            console.log(error);

            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message
                })
            }

            res.status(500).json({
                error: "Erro interno do servidor!"
            })

        }
    }

}

module.exports = ClientController;