const express = require('express')
const handlebars = require('express-handlebars')
const app  = express()

app.get("/", (req, res)=>{
  res.send('Teste!!!!');
})


//CONFIGURAÇÕES
     //handlebars
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine', 'handlebars')


const PORT = 8080
app.listen(PORT, ()=>{
  console.log("Porta funcionando!!!")
})
