const express = require('express')
const routerLogin = express.Router()
//Há certos erros aqui
routerLogin.get("/login",(req, res)=>{
  res.render('./login/login')
})

routerLogin.get('/login/principal',(req, res)=>{
  res.render('./login/index')
})

routerLogin.get('/regsitro', (req, res)=>{
  res.render('./login/registro)
})

module.exports = routerLogin
