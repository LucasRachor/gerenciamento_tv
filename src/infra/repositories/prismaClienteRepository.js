const { PrismaClient } = require('@prisma/client');
const ClientRepository = require('../../domain/repositories/clienteRepository')
const prisma = new PrismaClient();


class PrismaClientRepository extends ClientRepository {

    async criarCliente(payload, usuarioId) {
        try {
            console.log(payload)
            return await prisma.cliente.create({
                data: {
                    usuario: {
                        connect: {
                            id: usuarioId
                        }
                    },
                    ...payload,
                    endereco: {
                        create: {
                            cep: payload.endereco.cep,
                            rua: payload.endereco.rua,
                            bairro: payload.endereco.bairro,
                            cidade: payload.endereco.cidade,
                            estado: payload.endereco.estado,
                        }
                    }
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

}

module.exports = PrismaClientRepository;