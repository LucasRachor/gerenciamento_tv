const express = require("express");
require("dotenv").config();

const userRoutes = require("./interfaces/routes/userRoutes")
const authRoutes = require("./interfaces/routes/authRoutes")

const app = express();
app.use(express.json());

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
