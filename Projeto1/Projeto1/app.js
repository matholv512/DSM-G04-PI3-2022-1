const express = require('express')

// instanciar o express
const app = express();

const indexRoute = require('./routes/index.js')
const usersRoute = require('./routes/users.js')

app.use('/', indexRoute)
app.use('/users', usersRoute)
//configurar a porta execução do aplicativo
app.set('porta', 3000);

app.listen(app.get('porta'), function() {
    console.log('Servidor rodando na porta ' + app.get('porta'))
});

module.exports = app;
