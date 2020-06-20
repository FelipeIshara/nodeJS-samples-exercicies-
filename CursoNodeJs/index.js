const express = require("express");
const app = express();
const Sequelize = require('sequelize')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
//config
    //conection with mysql
const sequelize = new Sequelize('test', 'root', '160794', {
    host:"localhost",
    dialect: 'mysql'
})
    // templateengine
app.engine('handlebars', handlebars({defaltLayout:'main'}))
app.set('view engine', 'handlebars')
    //BodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.get("/cad", (req, res) => {
    res.render('formulario')
})
app.post("/add", (req, res) => {
    titulo = req.body.titulo;
    conteudo = req.body.conteudo;
    res.send(titulo + " " + conteudo)
})


app.listen(8081);