const express = require('express');
const UserController = require('../controllers/userController');
const CriarUsuario = require("../../application/usecases/user/criarUsuario");
const ListarUsuario = require("../../application/usecases/user/listarUsuario");
const PrismaUserRepository = require('../../infra/repositories/prismaUserRepository')
const router = express.Router();

const userRepository = new PrismaUserRepository();
const criarUsuario = new CriarUsuario(userRepository);
const listarUsuario = new ListarUsuario(userRepository);
const userController = new UserController({
    CriarUsuario: criarUsuario,
    ListarUsuario: listarUsuario,
});

router.get('/', (req, res) => userController.listar(req, res));
router.post('/', (req, res) => userController.criar(req, res));


module.exports = router;