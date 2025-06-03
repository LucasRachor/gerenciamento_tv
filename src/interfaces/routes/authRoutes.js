const express = require('express');
const AuthController = require('../controllers/authController')
const Login = require('../../application/usecases/auth/login');
const PrismaAuthRepository = require('../../infra/repositories/prismaAuthRepository');
const router = express.Router();

const authRepository = new PrismaAuthRepository();
const login = new Login(authRepository)

const authController = new AuthController({
    Login: login
})

router.post('/login', (req, res) => authController.login(req, res));

module.exports = router; 
