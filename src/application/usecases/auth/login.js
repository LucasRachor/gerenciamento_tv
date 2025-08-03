const bcrypt = require('bcrypt');

class Login {
    constructor(authRepository, tokenService) { this.authRepository = authRepository, this.tokenService = tokenService }

    async execute({ email, senha }) {
        const usuario = await this.authRepository.listarComEmail(email);

        if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
            throw new Error('Email ou senha incorretos!')
        }

        const token = this.tokenService.gerarToken({ id: usuario.id, nome: usuario.nomeCompleto, role: usuario.role });

        return {
            token,
            nome: usuario.nomeCompleto
        }
    }
}

module.exports = Login;