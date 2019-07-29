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

//-------------------rotas para edição-------------------------------------


//  -----rotas para remoção de professor ---------------------------------

})

module.exports = router02
