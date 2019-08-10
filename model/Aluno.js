const mongoose = require('mongoose')
const Schema   = mongoose.Schema


const Aluno = new Schema({
  nome:{
    type:String,
    required: true
  },
  email:{
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
    type:Date

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
