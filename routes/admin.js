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
//Aqui consta a página que irá me direcionar para a página de cadastro de novo
//aluno para que eu possa armazená-lo no banco de dados. Ou seja, Se notar bem,
//todo procedimento de adição de aluno resultará de uma três fases.
router.get('/aluno', (req, res)=>{
  res.render('./admin/aluno')
})
//Esta parte renderiza para a página onde serão pegos os dados que serão
//enviados via página post e armazenados no banco de dados.
router.get('/aluno/add', (req, res)=>{
  res.render('./admin/alunoadd')
})

//rota post para adição de aluno dentro do banco de dados.
router.post('/aluno/novo',(req, res)=>{
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

//-----------------------------------------------------------------------------
//ESTA PARTE PARA POST DE EDIÇÃO DE ALUNO.

//Tenho aqui a rota para acesso à página de edição de aluno. Nota-se que será
//pego o id de cada aluno dinamicamente e assim a podificá-lo.
router.get('/aluno/edit', (req, res)=>{
  res.render('./admin/alunoedit')
})

router.post('/aluno/editar', (req, res)=>{
  res.send("mensagem teste")
})




//Módulo para exportar tudo o que tenho a partir da rota determinada.
module.exports = router
