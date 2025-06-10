const express = require('express');
const AuthController = require('../controllers/authController')
const Login = require('../../application/usecases/auth/login');
const PrismaAuthRepository = require('../../infra/repositories/prismaAuthRepository');
const VerificarToken = require('../../application/usecases/auth/verificarToken');
const TokenService = require('../../libs/tokenService');
const router = express.Router();

const authRepository = new PrismaAuthRepository();
const login = new Login(authRepository, new TokenService())
const verificarToken = new VerificarToken(authRepository)

const authController = new AuthController({
    Login: login,
    VerificarToken: verificarToken
})

router.post('/login', (req, res) => authController.login(req, res));
router.get('/verificar', (req, res) => authController.verificar(req, res));

module.exports = router; 
