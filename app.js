const express    = require('express')
const handlebars = require('express-handlebars')
const mongoose   = require('mongoose')
const app        = express()
const admin      = require("./routes/admin")
const session    = require('express-session')
const flash      = require('connect-flash')

app.get("/", (req, res)=>{
  res.send('Teste!!!!');
})


//CONFIGURAÇÕES
     //handlebars
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine', 'handlebars')
     //mongoose
        mongoose.Promisse = global.Promisse
        mongoose.connect('mongodb://localhost/escola').then(()=>{
          console.log("Conectado ao banco de dados")
        }).catch((err)=>{
          console.log("Não conectado ao banco de dados "+err)
        })
     //rotas
        app.use('/admin', admin) //Aqui está definido o meu primeiro grupo de rotas.
     //middleware
        app.use(session(){
          secret:'aplicacaoescola',
          resave:true,
          saveUnitialized:true
        })
        app.flash()
        app.use((req, res, next)=>{
          //Criarei duas variáveis globais para o uso nos meus cookies.
          res.locals.success_msg = req.flash("success_msg")
          res.locals.error_msg   = req.flash("error_msg")
        })


const PORT = 8080
app.listen(PORT, ()=>{
  console.log("Porta funcionando!!!")
})
