class TvController {
    constructor({ CriarTv, ExcluirTv, ListarTvs, VincularTv, ListarClientesTvs }) {
        this.criarTv = CriarTv;
        this.excluirTv = ExcluirTv;
        this.listarTvs = ListarTvs;
        this.vincularTv = VincularTv;
        this.listarClientesTvs = ListarClientesTvs;
    }

    async criar(req, res) {

        const payload = req.body;
        try {
            await this.criarTv.execute(payload);

            res.status(201).json({
                mensagem: "Tv criada com sucesso!"
            })


        } catch (error) {

            console.log(error);

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

        const tvId = req.params['tvId'];
        try {
            await this.excluirTv.execute(tvId);

            res.status(200).json({
                mensagem: "Tv Excluida com sucesso!"
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

    async listar(req, res) {

        try {
            const tvs = await this.listarTvs.execute();

            if (tvs.length <= 0) {
                res.status(400).json({
                    error: "Nenhuma tv cadastrada!"
                })
            }

            res.status(200).json(tvs);


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

    async vincular(req, res) {
        const clienteId = req.params['clienteId']
        const tvId = req.params['tvId']

        console.log(tvId);

        try {

            await this.vincularTv.execute(clienteId, tvId);

            res.status(200).json({
                mensagem: "Tv e cliente vinculados com sucesso!"
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

    async listarClientes(req, res) {

        const usuarioId = req.usuarioId;

        const clientes = await this.listarClientesTvs.execute(usuarioId);

        res.status(200).json(clientes);

    }

}

module.exports = TvController;