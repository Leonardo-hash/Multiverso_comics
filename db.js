const Sequelize = require('sequelize');
const sequelize = new Sequelize( "clientes", "root", "",{
host: "127.0.0.1",
dialect: "mysql",

});
module.exports = sequelize;

sequelize.authenticate()
.then(function(){
console.log('conexão sucesso')
}).catch(function(error){
console.log("MERDAAAAAAA"        +error);
})