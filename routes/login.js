const express = require('express')
const mongoose = require('mongoose')
require('../models/Usuario')
const Usuario = mongoose.model('usuarios')
const routerLogin = express.Router()
const bcrypt    = require('bcryptjs')
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
if(req.boy.senha != req.body.senha2){ erros.push({texto:"Senhas diferentes.")}  
if(erros.length > 0){
    res.render("./login/registro", {erros: erros})
}else{
  
  Usuario.findOne({email: req.body.email}).then((usuario)=>{
     //Assim, estou buscando a existência de algum email. Caso ele já exista, será enviada a mensagem de erro
    if(usuario){ 
      req.flash("error_msg","Usuário já cadastrado!")
      res.redirect('./login/registro')
    }else{
      const novoUsuario = new Usuario({
      
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha  
      })
      
     //Aqui haverá o tratamento dado a senha para encriptá-la.
      bcrypt.genSalt(10,(erro, salt)=>{
         bcrypt.hash(novoUsuario.senha, salt, (erro, hash)=>{
            if(erro){
               req.flash('error_msg', "Houve um erro durante o processo de salvamento.")
               res.redirect('./login/registro')
            }
           
           novoUsuario.senha = hash
           novoUsuario.save().then(()=>{
              req.flash("success_msg", "Usuário salvo com sucesso")
              res.redirect('/')
           }).catch((err)=>{
              req.flash("error_msg","Erro!")
              res.redirect('./login/registro')
           })
         })
      })
    }
  }).catch((err)=>{
     req.flash("error_msg, "Houve erro interno")
     res.redirect('/login/index')
  })
    
}
})
module.exports = routerLogin
