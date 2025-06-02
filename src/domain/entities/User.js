class User {
    constructor({ nomeDeUsuario, nomeCompleto, email, senha }) {
        if (!nomeDeUsuario) throw new Error("O campo Nome de Usuario não pode ficar em branco")
        if (!email) throw new Error("O campo email não pode ficar em branco")

        this.nomeDeUsuario = nomeDeUsuario;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.senha = senha;
    }
}

module.exports = User;