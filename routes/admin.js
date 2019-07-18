const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()
const Aluno    = mongoose.model('alunos')
require('../models/Aluno')


router.get('/',(req, res)=>{
  res.render('./admin')
})
//Aqui serão todas as rotas referidas para os alunos.
router.get("/aluno", (req, res)=>{
  res.render('./admin/alunocadastro')
})
//rota para adição de novo aluno
router.post('/aluno/novo', (req, res)=>{
 var erros = []

 if (!req.body.nome || typeof req.body.nome == null || req.body.nome == undefined ) { erros.push({texto:"nome inválido"})}
 if (!req.body.nomeMae || typeof req.body.nomeMae == null || req.body.nomeMae == undefined) {erros.push({texto:"Nome da mãe é obrigatório"})}
 if (!req.body.nomePai || typeof req.body.nomePai == null || req.body.nomePai == undefined) {erros.push({texto:"Nome do pai é obrigatório"})}
 if (!req.body.idade || typeof req.body.idade == null || req.body.idade == undefined ) { erros.push({texto:"Idade é campo obrigatório"})}
 if (erros.length > 0) { res.render('/admin/alunoadd') }
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
      req.flash("success_msg", "Aluno cadastrado com sucesso.")
      res.redirect("/alunoadd")
   }).catch((err)=>{
      req.flash("error_msg", "Aluno não cadastrado")
      res.redirect('/alunoadd')
   })
 }
})





module.exports = router
