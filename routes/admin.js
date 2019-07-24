const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()

//requerimento do arquivo alunos que será usado
require('../models/Aluno')
//instanciamento do model para aluno
const Aluno    = mongoose.model('alunos') // instanciamento deste arquivo.

router.get('/', (req, res)=>{
  res.render('./admin/index')
})

router.get('/aluno', (req, res)=>{
  res.render('./admin/')
})

router.get('/aluno/add', (req, res)=>{
  res.render('./admin/alunoadd')
})


router.post('/novo',(req, res)=>{
  var erros = []

  if (!req.body.nome ||typeof req.body.nome == undefined || req.body.nome == null) {erros.push({texto:'Defina o nome corretamente'})}
  if (!req.body.nomeMae || typeof req.body.nomeMae == undefined || req.body.nomeMae == null) {erros.push({texto:'Nome mãe é obrigatório'})}
  if (!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null) {erros.push({texto:'Campo obrigatório'})}
  if (erros.length > 0 ) {res.render("/admin/aluno",{erros:erros})}
  else {


  const novoAluno = {
    nome: req.body.nome,
    idade: req.body.idade,
    turno: req.body.turno,
    anoEnsino: req.body.anoEnsino,
    anoEntrada: req.body.anoEntrada,
    anoSaida: req.body.anoSaida,
    nomePai: req.body.nomePai,
    nomeMae: req.body.nomeMae,
    telefone: req.body.telefone
  }
  new Aluno(novoAluno).save().then(()=>{
    req.flash("success_msg", "Aluno cadastrado com sucesso")
    res.redirect('/admin/aluno')
  }).catch((err)=>{
    req.flash("error_msg", "Falha ao cadastrar")
    console.log("Nao foi possível salvar"+err)
  })
  }
})



//Módulo para exportar tudo o que tenho a partir da rota determinada.
module.exports = router
