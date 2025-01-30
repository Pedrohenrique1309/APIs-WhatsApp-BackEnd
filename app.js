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
