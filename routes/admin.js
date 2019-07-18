const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()
const Aluno    = require.model('alunos')



router.get('/',(req, res)=>{
  res.render('./admin/principal')
})

router.post('/aluno', (req, res)=>{
   nome: req.body.nome,
   idade: req.body.idade,
   turno: req.body.turno,
   anoEnsino: req.body.anoEnsino,
   anoEntrada: req.body.anoEntrada,
   anoSaida: req.body.anoSaida,
   nomePai: req.body.nomePai,
   nomeMae: req.body.nomeMae,
   telefone: req.body.telefone
})



module.exports = router
