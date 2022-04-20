const  express = require("express");
const app = express();
const db = require('./db');

const port =5889

app.get("/", async(req, res)=>{
    res.send('pagina inicial')
})

app.listen(5889, ()=>{
    console.log("Servidor rodando na porta 8080")
})