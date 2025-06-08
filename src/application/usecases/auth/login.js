const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Login {
    constructor(authRepository, tokenService) { this.authRepository = authRepository, this.tokenService = tokenService }

    async execute({ email, senha }) {
        const usuario = await this.authRepository.listarComEmail(email);

        if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
            throw new Error('Email ou senha incorretos!')
        }

        return this.tokenService.gerarToken({ id: usuario.id, role: usuario.role });
        
    }
}

module.exports = Login;