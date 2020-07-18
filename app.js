var express = require('express')
var todoControlloer = require('./controllers/todoController')
var app = express()

app.set('view engine', 'ejs')

app.use(express.static('./public'))

todoControlloer(app)

app.listen(8888)

console.log('The server is http://localhost:8888/todo')
