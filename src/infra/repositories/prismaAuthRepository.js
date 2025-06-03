const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const AuthRepository = require("../../domain/repositories/authRepository");

class PrismaAuthRepository extends AuthRepository {

    async listarComEmail(email) {
        try {
            return await prisma.usuario.findUnique({
                where: {
                    email: email
                }
            })
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao retornar usuarios')
        }
    }

}

module.exports = PrismaAuthRepository;