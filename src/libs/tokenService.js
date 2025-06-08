const jwt = require('jsonwebtoken');

class TokenService {
    gerarToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    }
}

module.exports = TokenService;
