class TvController {
    constructor({ CriarTv }) {
        this.criarTv = CriarTv;
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

}

module.exports = TvController;