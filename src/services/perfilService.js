const bcrypt = require('bcrypt')
const perfilModel = require('./../models/Perfil')

module.exports={
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

}