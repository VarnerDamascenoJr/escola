const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const Componente = new Schema({
    nome:{
        type:String,
        default: 0
    },
    quantidade:{
        type:Number,
        default:0
    }

})


mongoose.model("componentes", Componente)