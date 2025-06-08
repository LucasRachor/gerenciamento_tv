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


}

module.exports = PrismaTvRepository;