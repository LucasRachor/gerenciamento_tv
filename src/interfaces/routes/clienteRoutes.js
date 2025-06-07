const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/clientController');
const CriarCliente = require('../../application/usecases/cliente/criarCliente');
const ListarClientes = require('../../application/usecases/cliente/listarClientes');
const ExcluirCliente = require('../../application/usecases/cliente/excluirCliente');
const EditarCliente = require('../../application/usecases/cliente/editarCliente');
const PrismaClientRepository = require('../../infra/repositories/prismaClienteRepository');

const clientRepository = new PrismaClientRepository();
const criarCliente = new CriarCliente(clientRepository);
const listarClientes = new ListarClientes(clientRepository);
const excluirCliente = new ExcluirCliente(clientRepository);
const editarCliente = new EditarCliente(clientRepository);
const clientController = new ClientController({
    CriarCliente: criarCliente,
    ListarClientes: listarClientes,
    ExcluirCliente: excluirCliente,
    EditarCliente: editarCliente
})

router.post('/', (req, res) => clientController.criar(req, res));
router.get('/', (req, res) => clientController.listar(req, res));
router.patch('/:clienteId', (req, res) => clientController.editar(req, res));
router.delete('/:clienteId', (req, res) => clientController.excluir(req, res));

module.exports = router;