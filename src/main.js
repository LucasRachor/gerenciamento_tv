const express = require("express");
require("dotenv").config();

const PrismaUserRepository = require("./infra/repositories/User/PrismaUserRepository");
const CriarUsuario = require("./application/usecases/User/criarUsuario");
const ListarUsuario = require("./application/usecases/User/listarUsuario");
const UserController = require("./interfaces/controllers/User/UserController");

const app = express();
app.use(express.json());

const userRepository = new PrismaUserRepository();
const criarUsuario = new CriarUsuario(userRepository);
const listarUsuario = new ListarUsuario(userRepository);
const userController = new UserController({
    CriarUsuario: criarUsuario,
    ListarUsuario: listarUsuario,
});

app.post("/users", (req, res) => userController.criar(req, res));
app.get("/users", (req, res) => userController.listar(req, res));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
