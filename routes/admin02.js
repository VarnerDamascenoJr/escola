const express = require('express')
const router02 = express.Router()

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
    //Aqui ficará a inserção do professor.
   }
})
//-------------------rotas para edição-------------------------------------


//  -----rotas para remoção de professor ---------------------------------

module.exports = router02
