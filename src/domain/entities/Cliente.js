class Cliente {
    constructor({ nomeCompleto, email, telefone, genero, endereco }) {
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.telefone = telefone;
        this.genero = genero;
        this.endereco = endereco;
    }
}

module.exports = Cliente;