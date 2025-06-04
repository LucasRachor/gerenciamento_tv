class UserController {
    constructor({ CriarUsuario, ModificarUsuario, ExcluirUsuario, ListarUsuario }) {
        this.criarUsuario = CriarUsuario;
        this.modificarUsuario = ModificarUsuario;
        this.excluirUsuario = ExcluirUsuario;
        this.listarUsuario = ListarUsuario;
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

    async modificar(req, res) {
        try {
            const usuarioId = req.params['usuarioId'];
            const usuarioData = req.body;

            const modificado = await this.modificarUsuario.execute(usuarioId, usuarioData);

            if (!modificado) {
                throw new Error("Erro ao modificar usuario")
            }

            res.status(200).json({
                mensagem: "Usuario modificado com sucesso!"
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

    async excluir(req, res) {
        try {

            const usuarioId = req.params['usuarioId'];
            const excluir = await this.excluirUsuario.execute(usuarioId);

            if (!excluir) {
                res.status(400).json({
                    error: "Erro ao excluir usuario"
                })
            }

            res.status(200).json({
                mensagem: `Usuario ${usuarioId} excluido com sucesso!`
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
            const usuarios = await this.listarUsuario.execute()

            res.status(200).json(usuarios)
        } catch (error) {
            res.status(400)
        }
    }

}

module.exports = UserController;