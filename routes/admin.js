const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()


//Aqui para carregamento dos models
require('./models/Aluno') //Aqui estou carregando o model que consta os dados a serem armazenados para alunos

//Aqui será instanciado cada model a ser usado
const Aluno = mongoose.models('Aluno')


router.post('/addaluno', (req, res)=>{
   nome: req.body.nome,
   idade: req.body.idade,
   turno: req.body.turno,
   anoEnsino: req.body.anoEnsino,
   anoEntrada: req.body.anoEntrada,
   anoSaida: req.body.anoSaida,
   nomeMae: req.body.nomeMae,
   nomePai: req.body.nomePai

   new Aluno = aluno.save().then((aluno)=>{

   }).catch((err)=>{
     
   })
})

model.exports = router
