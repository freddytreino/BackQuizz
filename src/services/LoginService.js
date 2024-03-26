const bcrypt = require('bcrypt')
const perfilModel = require('./../models/Perfil')
const tokenUtil = require('./../utils/TokenUtil')

module.exports={
    autenticar:async (perfil)=>{
        try {
            if(perfil.email){
                let perfilEncontrado = await perfilModel.findOne({
                    "perfil.email":perfil.email
                }).select("+perfil.senha").exec()
                console.log(perfilEncontrado)
                if (perfilEncontrado) {
                    const match = await bcrypt.compare(perfil.senha, perfilEncontrado.perfil.senha)
                    const igual= perfilEncontrado.perfil.email== perfil.email
                    console.log(igual)
                  
                    if (match && igual) {
                        //devolver o token + o id do perfil + email
                        const token = tokenUtil.gerarToken(JSON.stringify(perfilEncontrado.usuario))
                        return {
                            token: token,
                            email: perfilEncontrado.perfil.email,
                            perfil: perfilEncontrado._id,
                            nome: perfilEncontrado.nome,
                            pontuacao: perfilEncontrado.pontuacao,
                            usuario:perfilEncontrado.usuario,
                            respondido:perfilEncontrado.respondido
                        }}else{
                            throw{
                                status:400,
                                message:'Erro ao efetuar login: Credenciais inválidas'
                            }
                        }
                    }else{
                        throw{
                            status:400,
                            message:'Erro ao efetuar login: Credenciais inválidas'
                        }
                    }
                }else{
                    throw{
                        status:400,
                        message:'Erro ao efetuar login: Credenciais inválidas'
                    }
                }
           

            
        } catch (error) {
            console.log(`ERRO: ${error.message}`);
            throw error
        }

    }
}