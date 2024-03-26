const express = require('express')
const router = express.Router()
const perfilService = require('./../services/perfilService')


router.post('',async(req,res)=> {
    try {
        const resposta = await perfilService.cadastrar(req.body)
        res.json(resposta)
        
    } catch (error) {
        throw{message: message.error,status:500}
    }
})

module.exports = router