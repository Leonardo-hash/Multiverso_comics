const Sequelize = require('sequelize');
const db = require("./db");

const Usuarios = db.define('usuarios',{
    id: { type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
},
name:{
    type: Sequelize.STRING,
    allowNull: false,
    
},
telefone:{
    type: Sequelize.STRING,
    allowNull: false,
},
email:{
    type: Sequelize.STRING,
    allowNull: false,
},
endereco:{
    type: Sequelize.STRING,
    allowNull: false,
},
});
Usuarios.sync();

module.exports = Usuarios;
