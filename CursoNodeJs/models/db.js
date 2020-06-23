const Sequelize = require('sequelize')

 //conection with mysql
 const sequelize = new Sequelize('postapp', 'root', '160794', {
    host:"localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

