const mongoose = require('mongoose')
const Shema = mongoose.Schema


const Aluno = new Shema{
  nome:{
    type:String,
    required: true
  },
  idade:{
    type:Number,
    required:true
  },
  turno:{
    type:String,
    required: true
  },
  anoEnsino:{
    type:Number,
    required:true
  },
  anoEntrada:{
    type:Date,
    required:true
  },
  anoSaida:{
    type:Date,
    required: true
  },
  nomePai:{
    type:String,
    required:true
  },
  nomeMae:{
    type:String,
    requiredd:true
  },
  telefone:{
    type:Number,
    required:true
  }
}

mongoose.model('aluno', Aluno)
