const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/clientController');
const CriarCliente = require('../../application/usecases/cliente/criarCliente');
const PrismaClientRepository = require('../../infra/repositories/prismaClienteRepository');

const clientRepository = new PrismaClientRepository();
const criarCliente = new CriarCliente(clientRepository);

const clientController = new ClientController({
    CriarCliente: criarCliente,
})

router.post('/', (req, res) => clientController.criar(req, res));

module.exports = router;