const express = require("express");
const app = express();
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
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
        res.render('index', {posts: posts})
        console.log(posts)
    })
})
    //.then(function(posts){
      //  res.render('index', {nome: "victor"})
    

app.get('/delete/:id',(req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Mensagem deletada")
    })/*.catch((erro)=>{
        res.send("Não foi possível deletar")*/
    })



app.get("/cad", (req, res) => {
    res.render('formulario')
})
app.post("/add", (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo 
    }).then(() => res.redirect('/')
    ).catch((erro) => res.send("Houve um erro: " + erro))
})


app.listen(8081);