const { PrismaClient } = require('@prisma/client');
const TvRepository = require("../../domain/repositories/tvRepository");
const prisma = new PrismaClient;

class PrismaTvRepository extends TvRepository {

    async criarTv(payload) {

        try {
            return await prisma.tv.create({
                data: {
                    ...payload
                }
            })

        } catch (error) {

            console.log(error);
            if (error.code === 'P2002') {

                const campo = error.meta.target.split('_')[1];
                throw new Error(`Campo duplicado: ${campo}`);
            }

            throw new Error('Erro interno do servidor')

        }
    }

    async excluirTv(tvId) {

        try {
            return await prisma.tv.delete({
                where: {
                    id: tvId
                }
            })

        } catch (error) {

            console.log(error);
            if (error.code === 'P2025') {

                throw new Error(`Tv não encontrada`)
            }

            throw new Error(error.message)
        }
    }

    async listarTvs() {

        try {
            return await prisma.tv.findMany();
        } catch (error) {

            throw new Error("Erro ao listar tvs")

        }

    }

    async vincularTv(clienteId, tvId) {

        try {

            return await prisma.cliente_Tv.create({
                data: {
                    cliente: {
                        connect: {
                            id: clienteId
                        }
                    },
                    tv: {
                        connect: {
                            id: tvId
                        }
                    }
                }
            })

        } catch (error) {
            console.log(error);

            if (error.code === 'P2002') {
                throw new Error('Cliente já vinculado à esta Tv!')
            }

            throw new Error('Erro ao vincular Tvs');

        }

    }

    async listarClientesTvs(usuarioId) {

        try {
            const tvs = await prisma.tv.findMany({
                select: {
                    id: true,
                    nome: true,
                    clientes_tvs: {
                        where: {
                            cliente: {
                                usuarioId: usuarioId
                            }
                        },
                        select: {
                            cliente: {
                                select: {
                                    id: true,
                                    nomeCompleto: true,
                                    email: true,
                                    telefone: true,
                                    statusPagamento: true,
                                    pagamento: true
                                }
                            }
                        }
                    }
                }
            });

            const respostaFormatada = tvs
                .filter(tv => tv.clientes_tvs.length > 0)
                .map(tv => ({
                    id: tv.id,
                    nome: tv.nome,
                    clientes: tv.clientes_tvs.map(clientes => ({
                        id: clientes.cliente.id,
                        nome: clientes.cliente.nomeCompleto,
                        email: clientes.cliente.email,
                        telefone: clientes.cliente.telefone,
                        statusPagamento: clientes.cliente.statusPagamento,
                        pagamento: clientes.cliente.pagamento
                    }))
                }));


            return respostaFormatada;

        } catch (error) {
            console.log(error);

            throw new Error('Erro ao retornar clientes!')

        }

    }

}

module.exports = PrismaTvRepository;