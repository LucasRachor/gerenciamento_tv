
class ClientController {
    constructor({ CriarCliente, ListarClientes, ExcluirCliente, EditarCliente , ListarInformacoes}) {
        this.criarCliente = CriarCliente;
        this.listarClientes = ListarClientes;
        this.excluirCliente = ExcluirCliente;
        this.editarCliente = EditarCliente;
        this.listarInformacoes = ListarInformacoes;
    }

    async criar(req, res) {
        try {
            const payload = req.body;
            const usuarioId = req.usuarioId;

            await this.criarCliente.execute(payload, usuarioId);

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

    async listar(req, res) {
        try {
            const usuarioId = req.usuarioId;

            const clientes = await this.listarClientes.execute(usuarioId);

            if (clientes.length === 0) {
                res.status(400).json({
                    error: "Nenhum cliente encontrado!"
                })
            }

            res.status(200).json(clientes);

        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message
                })
            }

            res.status(500).json({
                error: "Erro interno do servidor"
            })


        }
    }

    async excluir(req, res) {

        const clienteId = req.params['clienteId'];

        try {
            await this.excluirCliente.execute(clienteId);

            res.status(200).json({
                mensagem: `Cliente ${clienteId}, excluído com sucesso!`
            })


        } catch (error) {

            console.log(error)

            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message
                })
            }

            res.status(500).json({
                error: "Erro interno do servidor"
            })

        }
    }

    async editar(req, res) {

        const clienteId = req.params['clienteId'];
        const payload = req.body;

        try {

            await this.editarCliente.execute(payload, clienteId);
            res.status(200).json({
                mensagem: `Cliente ${clienteId}, editado com sucesso!`
            })

        } catch (error) {

            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message
                })
            }

            res.status(500).json({
                error: "Erro interno do servidor"
            })

        }
    }

    async listarInfo(req, res) {

        try {
         
            const usuarioId = req.usuarioId;
        const infos = await this.listarInformacoes.execute(usuarioId);

        res.status(200).json(infos);

        } catch (error) {

            console.log(error)

            res.status(400).json(error)
            
        }

    }

}

module.exports = ClientController;