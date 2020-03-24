//instanciando um objeto express para o projeto
const express = require('express');

//criando uma variável que utilizará todos os métodos da framework
const app = express();

//método Get
app.get('/', (require, response) => {
    return response.json({
        autor: 'Você que está fazendo isto aqui',
        versao: 'no caso esta mesmo'
    });
});


//porta local para rodar o projeto (localhost:3333)
app.listen(3333);