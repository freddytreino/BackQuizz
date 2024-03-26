const mongoose = require('mongoose')


const perfilSchema = new mongoose.Schema({
    perfil:{
        email:{
            type: String,
            required: true,
           // unique:true
        },
        senha:{
            type:String,
            required:true,
            select:false
        }

    },
    nome:{
        type: String,
        required:true
    },
    pontuacao:{
        type: Number,
        default:0
    },
    usuario:{
        type:Boolean,
        default:true
    },
    respondido:{
        type:Number,
        default:0
    }

})
module.exports = mongoose.model('Perfil', perfilSchema)