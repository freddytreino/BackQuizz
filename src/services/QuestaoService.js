const questionModel = require('./../models/Questoes');
const questaoMath = require("./../models/QuestoesMath");
const questaoQuimica=require("./../models/QuestoesQuimica")

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
    criarQuestaoMath: async (questao) => {
        try {
            let novaQuestao = await questaoMath.create(questao);
            return novaQuestao;
        } catch (error) {
            console.error('Erro ao criar questão:', error);
            throw new Error('Erro ao criar a questão. Por favor, tente novamente mais tarde.');
        }
    },
    criarQuestaoQuimica: async (questao) => {
        try {
            let novaQuestao = await questaoQuimica.create(questao);
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
    },
    buscarUltimoNumeroMath: async()=>{
        
            let numero = await questaoMath.findOne().sort({numero:-1})
            return numero
        
    },
    buscarUltimoNumeroQuimica: async()=>{
        
        let numero = await questaoQuimica.findOne().sort({numero:-1})
        return numero
    
}
};
