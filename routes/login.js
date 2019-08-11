const express = require('express')
const routerLogin = express.Router()

routerLogin.get("/login",(req, res)=>{
  res.render('./login/login')
})

routerLogin.get('/login/principal',(req, res)=>{
  res.render('./login/index')
})

module.exports = routerLogin
