const express = require('express')
const router02 = express.Router()
const mongoose = require('mongoose')
require('../models/Professor')
const Professor = mongoose.model('professores')


router02.get('/professor', (req, res)=>{
  res.render('./admin02/professor')
})

router02.get('/professor/add', (req, res)=>{
  res.render('./admin02/professoradd')
})

router02.post('/professor/novo', (req, res)=>{
  var erros = []
   if (!req.body.nome || typeof req.body.nome ==undefined || req.body.nome == null ) { erros.push({texto:"Por favor,digite o nome corretamente."})}
   if (!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null) {erros.push({texto:"Digite o telefone corretamente."})}
   if (!req.body.disciplina || typeof req.body.disciplina == undefined || req.body.disciplina == null) {erros.push({texto:"Digite a disciplina corretamente."})}
   if (!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null) {erros.push({texto:"Digite a idade corretamente."}) }
   else {
    const novoProfessor = {
      nome: req.body.nome,
      idade: req.body.idade,
      disciplina: req.body.disciplina,
      cargaHoraria: req.body.cargaHoraria,
      anosExperiencia: req.body.anosExperiencia,
      formacao: req.body.formacao,
      disciplina02: req.body.disciplina02,
      telefone: req.body.telefone
    }
    new Professor(novoProfessor).save().then(()=>{
      req.flash("success_msg", "Cadastrado com sucesso")
    //  res.redirect("")
  }).catch((err)=>{
    res.flash("error_msg","Erro ao cadastrar")
  })
   }
})
//-------------------rotas para edição-------------------------------------
router02.get('/professor/edit', (req, res)=>{
  res.render('./admin02/professoredit')
})

router02.post('/professor/editar', (req, res)=>{
  //Ainda faltante;
})

//  -----rotas para remoção de professor ---------------------------------

module.exports = router02
