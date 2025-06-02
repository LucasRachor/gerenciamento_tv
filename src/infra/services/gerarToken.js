const jwt = require('jsonwebtoken');

async function gerarToken(payload) {

    return await jwt.sign(payload, process.env.JWT_SECRET)

}

module.exports = gerarToken;