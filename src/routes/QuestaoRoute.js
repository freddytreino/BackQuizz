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
/*
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
});*/

//rotas para cirar as questoes de acordo com o banco de dados de cada uma
router.post('/artes', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoArtes(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/biologia', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoBio(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/filosofia', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoFilosofia(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/fisica', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoFisica(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/geografia', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoGeografia(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/historia', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoHistoria(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/matematica', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoMath(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/quimica', async (req, res) => {
    try {
        const novaQuestao = await questaoService.criarQuestaoQuimica(req.body);
        if (novaQuestao) {
            res.json(novaQuestao);
        } else {
            res.status(500).json({ message: 'Erro ao criar a questão. Por favor, tente novamente mais tarde.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//teste para buscar questoes
router.get('/artes', async (req, res) => {
    try {
        const achou = await questaoService.buscarQuestoesArtes();
        res.json(achou)
    } catch (error) {

    }
})
router.get('', async (req, res) => {
    try {
        const achou = await questaoService.buscarQuestoes();
        res.json(achou)
    } catch (error) {

    }
})
//rotas para buscar ultima questao feita
router.get("/ultimoArtes", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroArtes();
        res.json(achou)
    } catch (error) {

    }
});
router.get("/ultimoBiologia", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroBio();
        res.json(achou)
    } catch (error) {

    }
});
router.get("/ultimoFilosofia", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroFilosofia();
        res.json(achou)
    } catch (error) {

    }
});
router.get("/ultimoFisica", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroFisica();
        res.json(achou)
    } catch (error) {

    }
});
router.get("/ultimoGeografia", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroGeografia();
        res.json(achou)
    } catch (error) {

    }
});
router.get("/ultimoHistoria", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroHistoria();
        res.json(achou)
    } catch (error) {

    }
});
router.get("/ultimoMath", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroMath();
        res.json(achou)
    } catch (error) {

    }
});
router.get("/ultimoQuimica", async (req, res) => {
    try {
        const achou = await questaoService.buscarUltimoNumeroQuimica();
        res.json(achou)
    } catch (error) {

    }
})
module.exports = router;
