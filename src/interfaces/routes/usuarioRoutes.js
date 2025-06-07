const express = require('express');
const UserController = require('../controllers/userController');
const CriarUsuario = require('../../application/usecases/usuario/criarUsuario');
const ModificarUsuario = require('../../application/usecases/usuario/modificarUsuario')
const ListarUsuario = require('../../application/usecases/usuario/listarUsuario');
const PrismaUserRepository = require('../../infra/repositories/prismaUsuarioRepository');
const ExcluirUsuario = require('../../application/usecases/usuario/excluirUsuario');
const router = express.Router();

const userRepository = new PrismaUserRepository();
const criarUsuario = new CriarUsuario(userRepository);
const modificarUsuario = new ModificarUsuario(userRepository);
const excluirUsuario = new ExcluirUsuario(userRepository);
const listarUsuario = new ListarUsuario(userRepository);
const userController = new UserController({
    CriarUsuario: criarUsuario,
    ModificarUsuario: modificarUsuario,
    ExcluirUsuario: excluirUsuario,
    ListarUsuario: listarUsuario,
});

router.get('/', (req, res) => userController.listar(req, res));
router.post('/', (req, res) => userController.criar(req, res));
router.patch('/:usuarioId', (req, res) => userController.modificar(req, res));
router.delete('/:usuarioId', (req, res) => userController.excluir(req, res));

module.exports = router;