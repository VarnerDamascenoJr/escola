const express = require('express')
const router02 = express.Router()
const mongoose = require('mongoose')
require('../models/Professor')
const Professor = mongoose.model('professores')
require('../models/Funcionario')
const Funcionario = mongoose.model('funcionarios')

router02.get('/professor', (req, res)=>{
  res.render('./admin02/professor')
})

router02.get('/professor/add', (req, res)=>{
  res.render('./admin02/professoradd')
})

router02.post('/professor/novo', (req, res)=>{
  var erros = []
   if (!req.body.nome || typeof req.body.nome ==undefined || req.body.nome == null ) { erros.push({texto:"Por favor,digite o nome corretamente."})}
   if (!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null) {erros.push({texto:"Digite o telefone corretamente."})}
   if (!req.body.disciplina || typeof req.body.disciplina == undefined || req.body.disciplina == null) {erros.push({texto:"Digite a disciplina corretamente."})}
   if (!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null) {erros.push({texto:"Digite a idade corretamente."}) }
   else {
    const novoProfessor = {
      nome: req.body.nome,
      idade: req.body.idade,
      disciplina: req.body.disciplina,
      cargaHoraria: req.body.cargaHoraria,
      anosExperiencia: req.body.anosExperiencia,
      formacao: req.body.formacao,
      disciplina02: req.body.disciplina02,
      telefone: req.body.telefone
    }
    new Professor(novoProfessor).save().then(()=>{
      req.flash("success_msg", "Cadastrado com sucesso")
    //  res.redirect("")
  }).catch((err)=>{
     console.log("Erro ao cadastrar professor"+err)
  })
   }
})
//-------------------rotas para edição-------------------------------------
router02.get('/professor/edit/:id', (req, res)=>{
    Professor.findOne({_id: req.params.id}).then((professores)=>{
      res.render('/admin02/professoredit', {professores:professores})
    }).catch((err)=>{
      req.flash('error_msg', "Não foi possível editar o cadastro.")
      res.redirect('/admin02/professor')
    })
})

router02.post('/professor/editar', (req, res)=>{
   Professor.findOne({_id: req.body.id}).then((professores)=>{
      var errors = []
    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {erros.push({texto:"Digite o nome corretamente."}) }
    if (!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null) {erros.push({texto:"Entre com sua idade corretamente."})}
    else {


     professores.nome = req.body.nome,
     professores.idade = req.body.idade,
     professores.disciplina = req.body.disciplina,
     professores.cargaHoraria = req.body.cargaHoraria,
     professores.anosExperiencia = req.body.anosExperiencia,
     professores.formacao = req.body.formacao,
     professores.telefone = req.body.telefone
}

   }).catch()
})

//  -----rotas para remoção de professor ---------------------------------
router02.post('/professor/deletar', (req, res)=>{
  //O id do professor será pego dinameicamente e então será buscado a
  // partir do remove e deletado caso esteja contigo no banco de dados.
  Professor.remove({_id: req.body.id}).then(()=>{
    //Tratamento caso o professor seja removido com sucesso do banco de dados.
    //Após ser deletado, então, o professor será redirecionado para a página
    //principal de professor.
   req.flash("success_msg", "Professor deletado com sucesso.")
   res.redirect('/admin02/professor')
 }).catch((err)=>{
   //Aqui é o tratamento caso o professor nãoseja removido. Assim, será exibida
   //uma mensagem de erro e serei direcionado para a página principal de professor.
   req.flash("error_msg", "Erro ao remover professor.")
   res.redirect('/admin02/professor')
 })
})

//--------AQUI SERÃO DADAS AS CONFIGURAÇÕES PARA FUNCIONARIO--- ----------
  //----Rotas necessárias para o uso nos funcionários --------------------

router02.get('/funcionario', (req, res)=>{
  res.render('./admin02/funcionario')
})

router02.get('/funcionario/add', (req, res)=>{
  res.render('./admin02/funcionarioadd')
})

router02.post('/funcionario/novo', (req, res)=>{
  var erros = []
  if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) { erros.push({texto:"Digite o nome corretamente."})}
  //Por enqunto coloquei somente um, mas colocarei vários tratamentos
  else {
    //para casatradmento no banco de dados nas seguites informações sobre funcionários.
    const novoFuncionario = {
      nome: req.body.nome,
      idade: req.body.idade,
      funcao: req.body.funcao,
      dataEntrada: req.body.dataEntrada,
      salario: req.body.salario,
      turnoTrabalho: req.body.salario,
      regimeTrabalho: req.body.regimeTrabalho
    }
    //Aqui uso o model para que os requerimentos sejam postos dentro do banco de
    //dados mongoose. Também, há o tratamento após adicionar e caso o cadastramento
    //nao seja possível, também haverá tratamento.
    Funcionario(novoFuncionario).save().then(()=>{
      req.flash("success_msg", "Funcionário cadastrado com sucesso.")
      res.redirect("/admin02/funcionario")
    }).catch((err)=>{
      console.log("Erro ao cadastrar funcionário."+err)
      res.redirect("/admin02/funcionario")
    })
  }
})

router02.get('/funcionario/edit/:id', (req, res)=>{
  res.render('./admin02/funcionarioedit')
})

router02.post('/funcionario/edit/editar', (req, res)=>{

})
router02.post('/funcionario/remover', (req, res)=>{
  //Aqui é pego o model de funcionário e acessado o banco de dados .
  //Nisso, é pego o funcionário a partir do seu id que será pego dinamicamente
  //na página handlebars que simula o html.
  Funcionario.remove({_id: req.body.id}).then(()=>{
    //Caso o funcionário seja deletado com sucesso então haverá
    //esta mensagem e a página será redirecionada para o inicial de funcionário.
    req.flash("success_msg", "Funcionário deletado com sucesso.")
    res.redirect("/admin02/funcionario")
  }).catch((err)=>{
    //Caso haja algum erro ao se tentar removê-lo, então, outra mensagem sera
    //exibida e havera direcionamento para a página inicial de funcionário.
    req.flash("error_msg", "Houve erro interno, não foi possível deletar funcionário.")
    res.redirect("/admin02/funcionario")
  })

})


module.exports = router02
