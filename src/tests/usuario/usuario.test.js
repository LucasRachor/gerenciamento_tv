const CriarUsuario = require('../../application/usecases/usuario/criarUsuario');

describe('CriarUsuario UseCase', () => {
    let usuarioRepositoryMock;
    let criarUsuarioUseCase;

    beforeEach(() => {

        usuarioRepositoryMock = {
            criarUsuario: jest.fn()
        };

        criarUsuarioUseCase = new CriarUsuario(usuarioRepositoryMock);

    });

    it('deve criar um usuario', async () => {

        const fakePayload = {
            nomeDeUsuario: "testeUsuario",
            nomeCompleto: "teste usuario",
            email: "teste@usuario.com",
            senha: "teste123"
        }

        const fakeUsuarioCriado = {
            id: "usuario-123",
            ...fakePayload
        }

        usuarioRepositoryMock.criarUsuario.mockResolvedValue(fakeUsuarioCriado);

        const result = await criarUsuarioUseCase.execute(fakePayload);

        expect(usuarioRepositoryMock.criarUsuario).toHaveBeenCalledWith(fakePayload);
        expect(result).toEqual(fakeUsuarioCriado);

    });

    it('deve lançar erro se o email já estiver cadastrado', async () => {
        const fakePayload = {
            nomeDeUsuario: "testeUsuario",
            nomeCompleto: "teste usuario",
            email: "teste@usuario.com",
            senha: "teste123"
        };

        const prismaDuplicateError = {
            code: 'P2002',
            meta: {
                target: ['email']
            },
            message: 'Unique constraint failed on the fields: (`email`)'
        };

        usuarioRepositoryMock.criarUsuario.mockRejectedValue(prismaDuplicateError);

        await expect(criarUsuarioUseCase.execute(fakePayload)).rejects.toEqual(prismaDuplicateError);
    });


});

