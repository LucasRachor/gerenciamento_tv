const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const gerarSalt = require('../../../libs/gerarSalt')
const UserRepository = require('../../../domain/repositories/User/UserRepository')

class PrismaUserRepository extends UserRepository {

    async listarComNome(nomeDeUsuario) {
        try {
            return await prisma.usuario.findUnique({
                where: { nomeDeUsuario }
            })
        } catch (error) {
            throw Error('Erro interno do servidor')
        }
    }

    async criarUsuario(usuarioData) {
        try {
            const salt = await gerarSalt();
            return await prisma.usuario.create({
                data: {
                    ...usuarioData,
                    senha: await bcrypt.hash(usuarioData.senha, salt)
                }
            })

        } catch (error) {
            if (error.code === 'P2002') {
                throw Error('Campos duplicados existentes!')
            }
            throw Error('Erro interno do servidor')
        }

    }

    async listarUsuarios() {
        try {
            return await prisma.usuario.findMany({
                select: {
                    id: true,
                    nomeDeUsuario: true,
                    nomeCompleto: true,
                    email: true,
                    role: true,
                    criadoEm: true,
                    atualizadoEm: true,

                }
            });
        } catch (error) {
            throw new Error('Erro ao listar usuarios')
        }
    }
}

module.exports = PrismaUserRepository;