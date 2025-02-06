/***************************************************************************
  * Objetivo: Criar as APIs do projeto WhatsApp
  * Data: 30/01/2024
  * Autor: Pedro
  * Versão: 1.0
***************************************************************************/

/*
    Para criar uma API devemos instalar:
        express       npm install express --save        - Serve para criar uma API
        cors          npm install cors --save           - Serve para configurar as permissões de uma API 
        body-parser   npm install body-parser --save    - Serve para manipular dados do body da API
*/

//Import das bibliotecas para criar uma API
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()

app.use((request,express,response,nex)=>{

  response.header("Access-Control-Allow-Origin",'*')

  response.header('Access-Control-Allow-Methods', "GET")

  app.use(cors())

  next()

})

const contatosUsers = require('./modulo/funcoes.js')

app.get('/v1/whatsapp/informacoes-pessoais/:telefone', cors(), async function (request,response) {
  
  let numero = request.params.telefone
  let dadosUsuario = contatosUsers.getInformacoesPessoais(numero)

  if(dadosUsuario){
    response.status(200)
    response.json(dadosUsuario)
  }else{
    response.status(404)
    response.json({'status': 404, 'menssage':'Não foi possível encontrar nenhum item de retorno'})
  }

})


app.get('/v1/whatsapp/informacoes-profile/:telefone', cors(), async function (request,response) {
  
  let numero = request.params.telefone
  let dadosUsuario = contatosUsers.getInformacoesProfile(numero)

  if(dadosUsuario){
    response.status(200)
    response.json(dadosUsuario)
  }else{
    response.status(404)
    response.json({'status': 404, 'menssage':'Não foi possível encontrar nenhum item de retorno'})
  }

})

app.get('/v1/whatsapp/contatos-usuario/:telefone', cors(), async function (request,response) {
  
  let numero = request.params.telefone
  let dadosUsuario = contatosUsers.getContatosUsuario(numero)

  if(dadosUsuario){
    response.status(200)
    response.json(dadosUsuario)
  }else{
    response.status(404)
    response.json({'status': 404, 'menssage':'Não foi possível encontrar nenhum item de retorno'})
  }

})


app.get('/v1/whatsapp/conversas-usuario/:telefone', cors(), async function (request,response) {
  
  let numero = request.params.telefone
  let dadosUsuario = contatosUsers.getConversaUsuario(numero)

  if(dadosUsuario){
    response.status(200)
    response.json(dadosUsuario)
  }else{
    response.status(404)
    response.json({'status': 404, 'menssage':'Não foi possível encontrar nenhum item de retorno'})
  }

})

app.get('/v1/whatsapp/conversas-usuario-contato/nome/:telefone', cors(), async function (request,response) {
  
  let numero = request.params.telefone
  let nomeContato = request.query.nome
  let dadosUsuario = contatosUsers.getMenssagensUsuarioContato(numero,nomeContato)

  if(dadosUsuario){
    response.status(200)
    response.json(dadosUsuario)
  }else{
    response.status(404)
    response.json({'status': 404, 'menssage':'Não foi possível encontrar nenhum item de retorno'})
  }

})

app.get('/v1/whatsapp/mensagem-usuario-contato/nome/palavraKey/:telefone', cors(), async function (request,response) {
  
  let numero = request.params.telefone
  let nomeContato = request.query.nome
  let palavraChave = request.query.palavraKey
  let dadosUsuario = contatosUsers.getPalavraChave(numero,nomeContato,palavraChave)

  if(dadosUsuario){
    response.status(200)
    response.json(dadosUsuario)
  }else{
    response.status(404)
    response.json({'status': 404, 'menssage':'Não foi possível encontrar nenhum item de retorno'})
  }

})

app.listen('8080', function(){
  console.log('API aguardando requisições...')
})

  



