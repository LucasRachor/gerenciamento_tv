const jwt = require('jsonwebtoken');

class VerificarToken {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }

    async execute(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = VerificarToken;