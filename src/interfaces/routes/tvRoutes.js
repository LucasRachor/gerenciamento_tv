const express = require('express');
const router = express.Router();

const PrismaTvRepository = require('../../infra/repositories/prismaTvRepository')
const CriarTv = require('../../application/usecases/tv/criarTv');
const TvController = require('../controllers/tvController');

const tvRepository = new PrismaTvRepository();
const criarTv = new CriarTv(tvRepository);

const tvController = new TvController({
    CriarTv: criarTv
})

router.post('/', (req, res) => tvController.criar(req, res));

module.exports = router;