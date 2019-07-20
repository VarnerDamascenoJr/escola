const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()
require('../models/Aluno')  //requerimento do arquivo alunos que será usado


//instanciamento do model para aluno
const Aluno    = mongoose.model('alunos') // instanciamento deste arquivo.




//rota para acesso à página de adição que será feita pelo post
router.get('/alunoadd',(req, res)=>{
  res.render('./admin/alunoadd')
})
//Aqui serão todas as rotas referidas para os alunos.
router.get("/aluno", (req, res)=>{
  res.render('./admin/alunocadastro')
})

//rota post para adição de novo aluno
router.post('./admin/alunoadd', (req, res)=>{
 var erros = []
// Aqui são dados alguns tratamentos importantes no momento do preenchimento do
//formulário para criação de estudante. Basicamente, estes campos devem ser
//diferentes de null, devem estar definidos e o nome deve existir. Caso isso
//não ocorra, então, coloco cada erro dentro de um vetor erros. Se notar, após
// eu inserir, vê-se que se o tamanho do erro for maior que zero( contém erros),
//então, a página para adição de alunos será renderizada novamente e as
//mensagens de erro aparecerão na tela como forma de cookie. Porque estes dados
//serão enviados para a página alunoadd e lá apareção e em uma estrutura
// each/else e serão exibidas no formato alert.
 if (!req.body.nome    || typeof req.body.nome == null       || req.body.nome    == undefined ) { erros.push({texto:"nome inválido"})}
 if (!req.body.nomeMae || typeof req.body.nomeMae == null    || req.body.nomeMae == undefined) {erros.push({texto:"Nome da mãe é obrigatório"})}
 if (!req.body.nomePai || typeof req.body.nomePai == null    || req.body.nomePai == undefined) {erros.push({texto:"Nome do pai é obrigatório"})}
 if (!req.body.idade   || typeof req.body.idade == null      || req.body.idade   == undefined ) { erros.push({texto:"Idade é campo obrigatório"})}
 if (erros.length > 0) { res.render('/admin/alunoadd', {erros: erros}) }

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
   //Consta-se aqui o instanciamento de um novo aluno a partir da variável
   //novoAluno e então será armazenada dentro do banco de dados e feito os
   //tratamentos necessários. Caso seja adicionado com sucesso, aparecerá um
   //cookie informando que foi adicionado e caso não seja, então, aparecerá
   //outro informando que não foi informado. Depois haverá direcionamento para
   // a página de cadastro.
   new Aluno(novoAluno).save().then(()=>{
      req.flash("success_msg", "Aluno cadastrado com sucesso.")
      res.redirect(".admin/aluno")
   }).catch((err)=>{
      req.flash("error_msg", "Aluno não cadastrado"+err)
      res.redirect('.admin/aluno')
   })
})

//-----------------------------------------------------------------------------
//Aqui serão as rotas para listar  aluno

router.get('/aluno-listar', (req, res)=>{
  res.render('./admin/aluno-listar')
})

//-----------------------------------------------------------------------------
//Aqui as rotas para editar aluno.

router.get('/aluno-editar', (req, res)=>{
  res.render('./admin/alunoedit')
})

router.post('./admin/alunoedit', (req, res)=>{
  
})






//Módulo para exportar tudo o que tenho a partir da rota determinada.
module.exports = router
