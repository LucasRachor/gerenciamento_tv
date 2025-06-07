class Tv {
    constructor({ nome, descricao }) {

        if (!nome) { throw new Error('Campo nome faltando!') }
        if (!descricao) { throw new Error('Campo descricao faltando!') }

        this.nome = nome;
        this.descricao = descricao;
    }
}

module.exports = Tv;