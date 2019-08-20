const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const Usuario = New Schema({
 
  nome:{
   type:String,
   required:true  
  },
  email:{
   type:String,
   required:true  
  },
  senha:{
   type:String,
   required:true 
  },
  eAdmin:{
    type:Number,
    default:0
  }

})
mongoose.model(Usuario,'usuarios')

