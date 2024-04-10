const questionModel = require('./../models/Questoes');
const questaoBiologia = require("../models/QuestoesBiologia");
const questaoFilosofia = require("../models/QuestoesFilosofia");
const questaoFisica = require("../models/QuestoesFisica");
const questaoGeografia = require("../models/QuestoesGeografia");
const questaoHistoria = require("../models/QuestoesHistoria");
const questaoMath = require("./../models/QuestoesMath");
const questaoQuimica = require("./../models/QuestoesQuimica");
const questaoLinguagens = require('./../models/QuestoesLinguagens');

module.exports = {
    //regras para criar questões
    criarQuestaoLinguagens: async (questao) => {
        try {
            let novaQuestao = await questaoLinguagens.create(questao);
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
    buscarQuestoesLinguagens: async () => {
        try {
            let todas = await questaoLinguagens.aggregate([{$match:{}},{$sample:{size:5}}]);
            return todas
        } catch (error) {
            throw new Error('Erro ao buscar as questões. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoesBiologia: async()=>{
        try {
            let questoes = await questaoBiologia.aggregate([{$match:{}},{$sample:{size:5}}]);
            return questoes
        } catch (error) {
            throw new Error('Erro ao buscar as questões. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoesFilosofia: async()=>{
        try {
            let questoes = await questaoFilosofia.aggregate([{$match:{}},{$sample:{size:5}}]);
            return questoes
        } catch (error) {
            throw new Error('Erro ao buscar as questões. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoesFisica: async()=>{
        try {
            let questoes = await questaoFisica.aggregate([{$match:{}},{$sample:{size:5}}]);
            return questoes
        } catch (error) {
            throw new Error('Erro ao buscar as questões. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoesHistoria: async()=>{
        try {
            let questoes = await questaoHistoria.aggregate([{$match:{}},{$sample:{size:5}}]);
            return questoes
        } catch (error) {
            throw new Error('Erro ao buscar as questões. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoesMatematica: async()=>{
        try {
            let questoes = await questaoMath.aggregate([{$match:{}},{$sample:{size:5}}]);
            return questoes
        } catch (error) {
            throw new Error('Erro ao buscar as questões. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoesQuimica: async()=>{
        try {
            let questoes = await questaoQuimica.aggregate([{$match:{}},{$sample:{size:5}}]);
            return questoes
        } catch (error) {
            throw new Error('Erro ao buscar as questões. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoes: async () => {
        try {
            let todas = await questionModel.aggregate([{$match:{subject:'matemática'}},{$sample:{size:5}}]);
            return todas
        } catch (error) {

        }
    },
    // regras para buscar o ultimo numero para usar ao criar a questao
    buscarUltimoNumeroLinguagens: async () => {

        let numero = await questaoLinguagens.findOne().sort({ numero: -1 })
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
