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
}

module.exports = AuthController;