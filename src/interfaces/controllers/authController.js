class AuthController {
    constructor({
        Login,
        VerificarToken,
    }) {
        this.authLogin = Login;
        this.verificarToken = VerificarToken;
    }

    async login(req, res) {
        try {

            const token = await this.authLogin.execute(req.body);

            if (token) {
                res.status(200).json({ token })
            }

        } catch (error) {
            console.log(error)
            res.status(400).send({
                error: "Email ou senha incorretos!"
            })
        }
    }

    async verificar(req, res) {
        try {
            const token = req.headers?.authorization?.split(" ")[1];

            if (token === undefined || token === '') {

                res.status(400).json({
                    error: "Token ausente da requisição"
                })

            }

            const verificar = await this.verificarToken.execute(token);

            if (!verificar) {
                throw new Error('Token inválido!')
            }

            res.status(200).json(verificar)

        } catch (error) {

            if (error instanceof Error) {
                res.status(409).json({
                    error: "Token inválido"
                })
            }

            console.log(error)
            res.status(500).json({
                error: "Erro interno do servidor"
            })
        }
    }

}

module.exports = AuthController;