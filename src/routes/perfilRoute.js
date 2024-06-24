const express = require('express')
const router = express.Router()
const perfilService = require('./../services/perfilService')


router.get("/melhores", async (req, res) => {
    try {
        const resposta = await perfilService.buscarmelhores();
        res.json(resposta)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})
router.post('', async (req, res) => {
    try {
        const resposta = await perfilService.cadastrar(req.body)
        res.json(resposta)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.post("/pontuacao", async (req, res) => {
    try {
        const resposta = await perfilService.atualizarPontuacao(req.body)
        res.json(resposta)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const resposta = await perfilService.buscarPorId(req.params.id)
        res.json(resposta)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router