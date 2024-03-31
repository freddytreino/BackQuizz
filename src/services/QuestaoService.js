const questionModel = require('./../models/Questoes');
const questaoArtes = require("./../models/QuestoesArtes");
const questaoBiologia = require("../models/QuestoesBiologia");
const questaoFilosofia = require("../models/QuestoesFilosofia");
const questaoFisica = require("../models/QuestoesFisica");
const questaoGeografia = require("../models/QuestoesGeografia");
const questaoHistoria = require("../models/QuestoesHistoria");
const questaoMath = require("./../models/QuestoesMath");
const questaoQuimica = require("./../models/QuestoesQuimica");
const QuestoesArtes = require('./../models/QuestoesArtes');

module.exports = {
    /*
    criarQuestao: async (questao) => {
        try {
            let novaQuestao = await questionModel.create(questao);
            return novaQuestao;
        } catch (error) {
            console.error('Erro ao criar questão:', error);
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },*/
    //regras para criar questões
    criarQuestaoArtes: async (questao) => {
        try {
            let novaQuestao = await questaoArtes.create(questao);
            return novaQuestao
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoBio: async (questao) => {
        try {
            let novaQuestao = await questaoBiologia.create(questao);
            return novaQuestao
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoFilosofia: async (questao) => {
        try {
            let novaQuestao = await questaoFilosofia.create(questao);
            return novaQuestao
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoFisica: async (questao) => {
        try {
            let novaQuestao = await questaoFisica.create(questao);
            return novaQuestao
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoGeografia: async (questao) => {
        try {
            let novaQuestao = await questaoGeografia.create(questao);
            return novaQuestao
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoHistoria: async (questao) => {
        try {
            let novaQuestao = await questaoHistoria.create(questao);
            return novaQuestao
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoMath: async (questao) => {
        try {
            let novaQuestao = await questaoMath.create(questao);
            return novaQuestao;
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoQuimica: async (questao) => {
        try {
            let novaQuestao = await questaoQuimica.create(questao);
            return novaQuestao;
        } catch (error) {
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    //teste para busncar
    buscarQuestoesArtes: async () => {
        try {
            let todas = await QuestoesArtes.find();
            return todas
        } catch (error) {

        }
    },
    buscarQuestoes: async () => {
        try {
            let todas = await questionModel.find();
            return todas
        } catch (error) {

        }
    },
    // regras para buscar o ultimo numero para usar ao criar a questao
    buscarUltimoNumeroArtes: async () => {

        let numero = await questaoArtes.findOne().sort({ numero: -1 })
        return numero

    },
    buscarUltimoNumeroBio: async () => {

        let numero = await questaoBiologia.findOne().sort({ numero: -1 })
        return numero

    },
    buscarUltimoNumeroFilosofia: async () => {

        let numero = await questaoFilosofia.findOne().sort({ numero: -1 })
        return numero

    },
    buscarUltimoNumeroFisica: async () => {

        let numero = await questaoFisica.findOne().sort({ numero: -1 })
        return numero

    },
    buscarUltimoNumeroGeografia: async () => {

        let numero = await questaoGeografia.findOne().sort({ numero: -1 })
        return numero

    },
    buscarUltimoNumeroHistoria: async () => {

        let numero = await questaoHistoria.findOne().sort({ numero: -1 })
        return numero

    },
    buscarUltimoNumeroMath: async () => {

        let numero = await questaoMath.findOne().sort({ numero: -1 })
        return numero

    },
    buscarUltimoNumeroQuimica: async () => {

        let numero = await questaoQuimica.findOne().sort({ numero: -1 })
        return numero

    }
};
