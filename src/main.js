const express = require("express");
require("dotenv").config();

const userRoutes = require("./interfaces/routes/userRoutes");
const authRoutes = require("./interfaces/routes/authRoutes");
const clientRoutes = require("./interfaces/routes/clientRoutes");
const autenticar = require("./infra/middlewares/authMiddeware");

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

const versaoApi = "api/v1";

app.use(`/${versaoApi}/auth`, authRoutes);
app.use(`/${versaoApi}/usuarios`, autenticar, userRoutes);
app.use(`/${versaoApi}/clientes`, autenticar, clientRoutes);

app.listen(PORT, () => {
    console.log(`🚀 =D Api rodando na porta: ${PORT} 🐵`);
});
