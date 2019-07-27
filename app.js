const express    = require('express')
const handlebars = require('express-handlebars')
const mongoose   = require('mongoose')
const app        = express()
const admin      = require("./routes/admin")
const session    = require('express-session')
const flash      = require('connect-flash')
const bodyParser = require('body-parser')
const path       = require('path')
const admin02    = require('./routes/admin02')
require('./models/Aluno')
const Aluno = mongoose.model('alunos')


//CONFIGURAÇÕES
     //Body-parser
        app.use(bodyParser.urlencoded({extended : true}))
        app.use(bodyParser.json())
     //handlebars
             //Estou identificando meu arquivo main contigo na minha pasta de view como
             //sendo meu template padrão nos meus usos; também, informando ao express que
             //estou usando especificamente o handlebars
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine', 'handlebars')
     //mongoose
             //Aqui estou fazendo o acesso bem simples no meu banco de dados e usando
             //o mongoose para isso. Em seguida eu faço um tratamento para dizer-me
             //que se o banco for acessado com sucesso eu terei um mensagem informando;
             //caso não, ele também me informará sobre. Assim sendo, estou acessando o
             //banco no servidor local e ele chama-se escola.
        mongoose.Promisse = global.Promisse
        mongoose.connect('mongodb://localhost/escola_ensino').then(()=>{
          console.log("Conectado ao banco de dados")
        }).catch((err)=>{
          console.log("Não conectado ao banco de dados " +err)
        })

     //middleware
            //Aqui estou definindo os meus meio-termos. Ou seja, as mensagens
            //que serão usadas via navegador, para facilitar.
        app.use(session({
          secret:'aplicacaoescola',
          resave:true,
          saveUninitialized:true
        }))
        app.use(flash())
        app.use((req, res, next)=>{
          //Criarei duas variáveis globais para o uso nos meus cookies.
          res.locals.success_msg = req.flash("success_msg")
          res.locals.error_msg   = req.flash("error_msg")
          next()
        })

      //public
         app.use(express.static(path.join(__dirname, "public")))
      //rotas

        app.use('/admin', admin) //Aqui está definido o meu primeiro grupo de rotas.
        app.use('/admin02, admin02')//Aqui será meu segundo conjunto de rotas

            //Aqui estou informando a porta que será usada nesta aplicação
            //também estou mostrando a mensagem caso o meu servidor seja acessado com
            //sucesso
const PORT = 8081
app.listen(PORT, ()=>{
  console.log("Sevidor funcionando corretamente.")
})
