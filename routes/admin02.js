const express = require('express')
const router02 = express.Router()

router02.get('/professor', (req, res)=>{
  res.render('/admin02/professor')
})

router02.get('/professor/add', (req, res)=>{
  res.render('/admin02/professoradd')
})

module.exports = router02
