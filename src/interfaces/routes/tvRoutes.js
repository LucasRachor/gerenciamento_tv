const express = require('express');
const router = express.Router();

const PrismaTvRepository = require('../../infra/repositories/prismaTvRepository');
const CriarTv = require('../../application/usecases/tv/criarTv');
const ExcluirTv = require('../../application/usecases/tv/excluirTv');
const ListarTvs = require('../../application/usecases/tv/listarTvs');
const TvController = require('../controllers/tvController');

const tvRepository = new PrismaTvRepository();
const criarTv = new CriarTv(tvRepository);
const excluirTv = new ExcluirTv(tvRepository);
const listarTvs = new ListarTvs(tvRepository);

const tvController = new TvController({
    CriarTv: criarTv,
    ExcluirTv: excluirTv,
    ListarTvs: listarTvs,
})

router.post('/', (req, res) => tvController.criar(req, res));
router.get('/', (req, res) => tvController.listar(req, res));
router.delete('/:tvId', (req, res) => tvController.excluir(req, res));

module.exports = router;