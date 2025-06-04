const { PrismaClient } = require('@prisma/client');
const UserRepository = require('../../domain/repositories/usuarioRepository')
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

class PrismaUserRepository extends UserRepository {

    async criarUsuario(payload) {

        try {
            const salt = await bcrypt.genSalt(10);
            return await prisma.usuario.create({
                data: {
                    ...payload,
                    senha: await bcrypt.hash(usuarioData.senha, salt)
                }
            })

        } catch (error) {

            if (error.code === 'P2002') {

                const campo = error.meta.target.split('_')[1];

                throw new Error(`Campo duplicado: ${campo.toUpperCase()}`)
            }

            console.log(error)
            throw Error('Erro interno do servidor')
        }
    }

    async modificarUsuario(usuarioId, payload) {

        try {
            return await prisma.usuario.update({
                where: {
                    id: usuarioId
                },
                data: {
                    ...payload
                }

            })
        } catch (error) {

            if (error.code === 'P2002') {

                const campo = error.meta.target.split('_')[1];

                throw new Error(`Campo duplicado: ${campo.toUpperCase()}`)
            }

            console.log(error)
            throw Error('Erro interno do servidor')
        }
    }

    async excluirUsuario(usuarioId) {
        try {
            return await prisma.usuario.delete({
                where: {
                    id: usuarioId
                }
            })
        } catch (error) {

            if (error.code === 'P2025') {
                throw new Error('Usuario não encontrado!')
            }

            console.log(error)
            throw new Error('Erro interno do servidor')
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
            console.log(error)
            throw new Error('Erro ao listar usuarios')
        }
    }

    async listarComEmail(email) {

        try {
            return await prisma.usuario.findUnique({
                where: {
                    email: email
                }
            })

        } catch (error) {
            console.log(error)
            throw Error('Erro interno do servidor')
        }
    }
}

module.exports = PrismaUserRepository;