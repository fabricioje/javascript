const express = require('express');
const consign = require('consign'); //Pacote para gerenciar as rotas
const bodyParser = require('body-parser'); //Modulo para conseguir fazer a leitura dos dados enviar como paramentro na requisição

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando');

});