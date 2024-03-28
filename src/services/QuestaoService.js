const questionModel = require('./../models/Questoes');

module.exports = {
    criarQuestao: async (questao) => {
        try {
            let novaQuestao = await questionModel.create(questao);
            return novaQuestao;
        } catch (error) {
            console.error('Erro ao criar questão:', error);
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    buscarQuestoes: async() =>{
        try {
            let todas = await questionModel.find();
            return todas
        } catch (error) {
            
        }
    }
};
