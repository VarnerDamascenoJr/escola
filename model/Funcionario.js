const mongoose = require('mongoose');
const Schema   = mongoose.Schema


const Funcionario = new Schema({
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
  },
  telefone:{
    type: Number,
    required:true
  }

})

mongoose.model('funcionarios', Funcionario)
