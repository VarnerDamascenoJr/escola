const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const Professor = new Schema({
  nome:{
    type: String,
    required: true
  },
  idade:{
    type: Number,
    required: true
  },
  disciplina:{
    type:String,
    required: true
  },
  cargaHoraria:{
    type:String,
    required: true
  },
  anosExperiencia:{
    type: Number,
    required: true
  },
  formacao:{
    type: String,
    required: true
  },
  disciplina02:{
    type: String
  },
  telefone:{
    type: Number,
    required: true
  }
})

//modulo para exportar os esqueleto de cada professor.
mongoose.model('professores', Professor)
