class UserController {
    constructor({ CriarUsuario, ListarUsuario, Login }) {
        this.criarUsuario = CriarUsuario;
        this.listarUsuario = ListarUsuario;
        this.loginUsuario = Login;
    }

    async criar(req, res) {
        try {
            const usuario = await this.criarUsuario.execute(req.body);

            if (usuario) {
                return res.status(201).json({
                    mensagem: "Usuario cadastrado com sucesso!"
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                error: error.message
            })
        }
    }

    async listar(req, res) {
        try {
            const usuarios = await this.listarUsuario.execute()

            res.status(200).json(usuarios)
        } catch (error) {
            res.status(400)
        }
    }

}

module.exports = UserController;