const bcrypt = require('bcrypt');

async function gerarSalt() {
    return await bcrypt.genSalt(10)
}

module.exports = gerarSalt;