//estrutura da tabela de postagens.

//importar module db
const db = require('./db.js')
//definir um novo model (tabela) postagens(titulo(string), conteudo(string))
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})


module.exports = Post;
            

//.sync({force: true}) para criar a tabela na db
//Post.sync({force: true})