const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()


//Aqui para carregamento dos models
require('./models/Aluno') //Aqui estou carregando o model que consta os dados a serem armazenados para alunos

//Aqui será instanciado cada model a ser usado
const Aluno = mongoose.model('Aluno')


router.post('/addaluno', (req, res)=>{
  res.render()
})

model.exports = router
