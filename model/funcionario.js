const mongoose = require('mongoose');
const Schema   = mongoose.Schema


const Funcionario = new Shema{
  nome:{
    type:String,
    required: true
  },
  idade:{
    type:Number,
    required:true
  },
  funcao:{
    type:String,
    required:true
  },
  dataEntrada:{
    type:Date,
    required:true
  },
  salario:{
    type:Number,
    required:true
  },
  turnoTrabalho:{
    type:String,
    required:true
  },
  regimeTrabalho:{
    type:String,
    required:true
  }

}

mongoose.model('funcionario', Funcionario)
