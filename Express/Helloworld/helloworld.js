const express = require("express");
const app = express();
const Sequelize = require('sequelize')
const handlebars = require('express-hadlebars')
//config
    //conection with mysql
const sequelize = new Sequelize('test', 'root', '160794', {
    host:"localhost",
    dialect: 'mysql'
})
    // templateengine
app.engine('handlebars', handlebars({defaltLayout:'main'}))
app.set('view engine', handlebars)


//rotas
app.get("/", (req, res) => {
    res.send("Hello World!!!!!!!!!")
})

app.get('/ola/:nome/:cargo', (req, res) => {
    res.send(req.params);
})

app.listen(8081);