const bcrypt = require('bcrypt')
const perfilModel = require('./../models/Perfil')

module.exports = {
  cadastrar: async (perfil) => {
    try {
      perfil.perfil.senha = await bcrypt.hash(perfil.perfil.senha, 10)
      let novoPerfil = await perfilModel.create(perfil)
      //novoPerfil.usuario.senha = undefined
      return novoPerfil

    } catch (error) {
      throw { message: error.message, status: 500 }
    }

  },
  //atualizar a pontucao do usuario
  atualizarPontuacao: async (pontuacao) => {
    try {
      const id = pontuacao.id
      const achado = await perfilModel.findOne({ _id: id })
      const pontos = pontuacao.pontuacao + achado.pontuacao
      const quantidade = pontuacao.respondido + achado.respondido

      //console.log(achado)
      let atualizarPontos = await perfilModel.updateOne({ _id: id }, { pontuacao: pontos, respondido: quantidade })
      return atualizarPontos
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },
  //buscar perfil por id
  buscarPorId: async (_id) => {
    try {
      const id = _id
      const achado = await perfilModel.findOne({ _id: id })
      return achado
    } catch (error) {
      throw { message: error.message, status: 500 }
    }

  },

  buscarmelhores: async()=>{
    try {
      const achado = await perfilModel.find({usuario:true}).sort({ pontuacao: -1 }).limit(5)
      return achado
    } catch (error) {
      throw { message: error.message, status: 500 }
      
    }
  }

}