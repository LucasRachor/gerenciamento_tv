const express = require("express");
require("dotenv").config();

const usuarioRoutes = require("./interfaces/routes/usuarioRoutes");
const authRoutes = require("./interfaces/routes/authRoutes");
const clienteRoutes = require("./interfaces/routes/clienteRoutes");
const tvRoutes = require('./interfaces/routes/tvRoutes');
const autenticar = require("./infra/middlewares/authMiddeware");

const app = express();
const PORT = process.env.PORT;
const versaoApi = "api/v1";
app.use(express.json());

app.use(`/${versaoApi}/auth`, authRoutes);
app.use(`/${versaoApi}/usuarios`, usuarioRoutes);
app.use(`/${versaoApi}/clientes`, autenticar, clienteRoutes);
app.use(`/${versaoApi}/tvs`, autenticar, tvRoutes);

app.listen(PORT, () => {
    console.log(`🚀 =D Api rodando na porta: ${PORT} 🐵`);
});
