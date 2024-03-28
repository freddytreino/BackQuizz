const express = require('express');
const router = express();
const questaoService = require('./../services/QuestaoService');

// Middleware para fazer a conversão do campo numero para número
router.use((req, res, next) => {
  if (req.body.numero && typeof req.body.numero === 'string') {
    req.body.numero = parseInt(req.body.numero);
  }
  next();
});

router.post('', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestao(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        console.error('Erro ao criar questão:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
