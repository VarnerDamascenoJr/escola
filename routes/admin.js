const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()
const Aluno    = require.model('alunos')



router.get('/',(req, res)=>{
  res.render('./admin/principal')
})

router.post('/aluno', (req, res)=>{
   
  
})



module.exports = router
