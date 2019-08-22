const express = require('express')
const mongoose = require('mongoose')
require('../models/Usuario')
const Usuario = mongoose.model('usuarios')
const routerLogin = express.Router()

//Há certos erros aqui
routerLogin.get("/login",(req, res)=>{
  res.render('./login/login')
})

routerLogin.get('/login/principal',(req, res)=>{
  res.render('./login/index')
})

routerLogin.get('/login/registro', (req, res)=>{
  res.render('./login/registro)
})
  
routerLogin.post('/registrar', (req, res)=>{
//Aqui consistirá na validação de usuário
  var erros = []

if(!req.body.nome  || typeof req.body.nome == null  || req.body.nome == undefined) { erros.push({texto:"Campo nome incorreto. Digite corretamente, por favor."})}
if(!req.body.email || typeof req.body.email == null || req.body.email == undefined){ erros.push({texto:"Campo obrigatório, digite corretamente."})}
if(!req.body.senha || typeof req.body.senha == null || req.body.senha == undefined){ erros.push({texto:"Digite a senha corretamente."})}
if(erros.length > 0){
    res.render("./login/registro", {erros: erros})
}else{}
})
module.exports = routerLogin
