const express = require('express');
const router = express.Router();

const PrismaTvRepository = require('../../infra/repositories/prismaTvRepository');
const CriarTv = require('../../application/usecases/tv/criarTv');
const ExcluirTv = require('../../application/usecases/tv/excluirTv');
const ListarTvs = require('../../application/usecases/tv/listarTvs');
const VincularTv = require('../../application/usecases/tv/vincularTv');
const TvController = require('../controllers/tvController');
const ListarClientesTvs = require('../../application/usecases/tv/listarClientesTvs');

const tvRepository = new PrismaTvRepository();
const criarTv = new CriarTv(tvRepository);
const excluirTv = new ExcluirTv(tvRepository);
const listarTvs = new ListarTvs(tvRepository);
const vincularTv = new VincularTv(tvRepository);
const listarClientesTv = new ListarClientesTvs(tvRepository);

const tvController = new TvController({
    CriarTv: criarTv,
    ExcluirTv: excluirTv,
    ListarTvs: listarTvs,
    VincularTv: vincularTv,
    ListarClientesTvs: listarClientesTv
})

router.post('/', (req, res) => tvController.criar(req, res));
router.post('/vincular/:clienteId/:tvId', (req, res) => tvController.vincular(req, res));
router.get('/', (req, res) => tvController.listar(req, res));
router.get('/clientes', (req, res) => tvController.listarClientes(req, res));
router.delete('/:tvId', (req, res) => tvController.excluir(req, res));

module.exports = router;