const bcrypt = require('bcrypt');

class Login {
    constructor(userRepository, tokenService) {
        this.userRepository = userRepository,
            this.tokenService = tokenService
    }

    async execute({ nomeDeUsuario, senha }) {
        const usuario = await this.userRepository.listarComNome(nomeDeUsuario);

        if (!usuario || !await bcrypt.compare(usuario.senha, senha)) {
            throw new Error('Nome de usuario ou senha incorreto!')
        }

        return await this.tokenService.gerarToken({ id: usuario.id, role: usuario.role })

    }
}

module.exports = Login;