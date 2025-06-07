const { PrismaClient } = require('@prisma/client');
const ClienteRepository = require('../../domain/repositories/clienteRepository')
const prisma = new PrismaClient();


class PrismaClienteRepository extends ClienteRepository {

    async criarCliente(payload, usuarioId) {
        try {
            const cliente = await prisma.cliente.create({
                data: {
                    usuario: {
                        connect: {
                            id: usuarioId
                        }
                    },
                    nomeCompleto: payload.nomeCompleto,
                    email: payload.email,
                    telefone: payload.telefone,
                    genero: payload.genero
                }
            })

            await prisma.endereco.create({
                data: {
                    cep: payload.endereco.cep,
                    rua: payload.endereco.rua,
                    bairro: payload.endereco.bairro,
                    cidade: payload.endereco.cidade,
                    estado: payload.endereco.estado,
                    clienteId: cliente.id
                }
            })

        } catch (error) {
            console.log(error)

            if (error.code === 'P2002') {

                const campo = error.meta.target.split('_')[1];

                throw new Error(`Campo duplicado: ${campo}`)
            }

            throw new Error('Erro interno do servidor')

        }
    }

    async listarClientes(usuarioId) {
        try {
            return await prisma.cliente.findMany({
                where: {
                    usuarioId: usuarioId
                },
                select: {
                    id: true,
                    nomeCompleto: true,
                    email: true,
                    telefone: true,
                    genero: true,
                    pagamento: true,
                    endereco: {
                        select: {
                            id: true,
                            cep: true,
                            bairro: true,
                            estado: true,
                            cidade: true,
                            rua: true,
                        }
                    }
                }
            })

        } catch (error) {

            console.log(error)
            throw new Error('Erro interno ao retonar clientes')

        }
    }

    async excluirCliente(clienteId) {

        try {
            return await prisma.cliente.delete({
                where: {
                    id: clienteId
                }
            })

        } catch (error) {

            if (error.code === 'P2025') {
                throw new Error("Cliente não encontrado!")
            }

            console.log(error);
            throw new Error("Erro interno do servidor")
        }

    }

    async editarCliente(payload, clienteId) {
        try {
            return await prisma.cliente.update({
                where: {
                    id: clienteId
                },
                data: {
                    ...payload
                }
            })
        } catch (error) {
            console.log(error)

            if (error.code === 'P2002') {

                const campo = error.meta.target.split('_')[1];

                throw new Error(`Campo duplicado: ${campo.toUpperCase()}`)
            }

            throw new Error("Erro ao editar usuario")
        }
    }

}

module.exports = PrismaClienteRepository;