const express = require("express");
const app = express();
const usuarios=[
    {nome:"pedro", idade:20},
    {nome:"Maria", idade:50},
    {nome:"William", idade:19},
    {nome:"Bispo", idade:70}
]
app.get("/",(req,res)=>{
    res.json({mensagem:"hello word"})
})
app.get("/usuarios",(req,res)=>{
    res.send(usuarios)
    res.json({mensagem:"hello word"})
})
module.exports = app;

