const mongoose = require('mongoose')
const Schema   = mongoose.Schema


const Aluno = new Schema({
  nome:{
    type:String,
    required: true
  },
  email:{
    type:String
    
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
    type:String
    
  },
  anoEntrada:{
    type:Number,
    required:true
  },
  anoSaida:{
    type:Number
    
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
})

mongoose.model("alunos", Aluno)
