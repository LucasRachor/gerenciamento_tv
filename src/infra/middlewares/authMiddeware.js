const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const autenticar = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ erro: 'Token malformado ou ausente' });
    }

    const token = authHeader.split(' ')[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const usuario = await prisma.usuario.findUnique({
            where: { id: decoded.id },
        });

        if (!usuario) return res.status(401).json({ error: 'Usuário não encontrado' });

        req.usuarioId = usuario.id;

        next();
    } catch (error) {
        console.error('Token inválido', error);

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Sessão expirada. Por favor, faça login novamente.' });
        }

        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = autenticar;