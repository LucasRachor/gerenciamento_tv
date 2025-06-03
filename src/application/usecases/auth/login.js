const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Login {
    constructor(authRepository) { this.authRepository = authRepository }

    async execute({ email, senha }) {
        const usuario = await this.authRepository.listarComEmail(email);

        if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
            throw new Error('Email ou senha incorretos!')
        }

        return jwt.sign({ id: usuario.id, role: usuario.role }, process.env.JWT_SECRET, { expiresIn: '24h' })

    }
}

module.exports = Login;