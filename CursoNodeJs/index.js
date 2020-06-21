const express = require("express");
const app = express();

const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post.js')
//config
   
    // templateengine
app.engine('handlebars', handlebars({defaltLayout:'main'}))
app.set('view engine', 'handlebars')
    //BodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.get("/", (req, res) => {
    Post.findAll().then(function(posts){
        console.log(posts['users'])
    })})
    //.then(function(posts){
      //  res.render('index', {nome: "victor"})
    




app.get("/cad", (req, res) => {
    res.render('formulario')
})
app.post("/add", (req, res) => {
    Post.create({
        título: req.body.titulo,
        conteúdo: req.body.conteudo 
    }).then(() => res.redirect('/')
    ).catch((erro) => res.send("Houve um erro: " + erro))
})


app.listen(8081);