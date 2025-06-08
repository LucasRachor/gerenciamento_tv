const bcrypt = require('bcrypt');
const Login = require('../../application/usecases/auth/login');

jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('Login UseCase', () => {
    let authRepositoryMock;
    let tokenServiceMock;
    let loginUseCase;

    beforeEach(() => {
        authRepositoryMock = {
            listarComEmail: jest.fn()
        };

        tokenServiceMock = {
            gerarToken: jest.fn()
        };

        loginUseCase = new Login(authRepositoryMock, tokenServiceMock);
    });

    it('deve gerar um token se email e senha estiverem corretos', async () => {
        const fakeUser = {
            id: 'user-123',
            email: 'test@example.com',
            senha: 'hashed-password',
            role: 'user'
        };

        authRepositoryMock.listarComEmail.mockResolvedValue(fakeUser);
        bcrypt.compare.mockResolvedValue(true);
        tokenServiceMock.gerarToken.mockResolvedValue('fake-token');

        const result = await loginUseCase.execute({
            email: 'test@example.com',
            senha: 'plain-password'
        });

        expect(authRepositoryMock.listarComEmail).toHaveBeenCalledWith('test@example.com');
        expect(bcrypt.compare).toHaveBeenCalledWith('plain-password', 'hashed-password');
        expect(tokenServiceMock.gerarToken).toHaveBeenCalledWith({ id: 'user-123', role: 'user' });
        expect(result).toBe('fake-token');
    });

    it('deve lançar erro se o usuário não for encontrado', async () => {
        authRepositoryMock.listarComEmail.mockResolvedValue(null);

        await expect(loginUseCase.execute({
            email: 'notfound@example.com',
            senha: 'any'
        })).rejects.toThrow('Email ou senha incorretos!');
    });

    it('deve lançar erro se a senha estiver incorreta', async () => {
        const fakeUser = {
            id: 'user-123',
            email: 'test@example.com',
            senha: 'hashed-password',
            role: 'user'
        };

        authRepositoryMock.listarComEmail.mockResolvedValue(fakeUser);
        bcrypt.compare.mockResolvedValue(false);

        await expect(loginUseCase.execute({
            email: 'test@example.com',
            senha: 'wrong-password'
        })).rejects.toThrow('Email ou senha incorretos!');
    });
});
