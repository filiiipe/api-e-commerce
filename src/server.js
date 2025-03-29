const express = require("express");
const app = express();

app.use(express.json()); // Permitir JSON nas requisições

// Rota inicial
app.get("/", (req, res) => {
    res.send("API E-Commerce rodando! 🚀");
});

// Definir a porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
