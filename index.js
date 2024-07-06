require('dotenv').config()
const express = require('express');
const app = express()

const port = 4000

app.get("/", (req, res)=>{
    res.send("Hello World !")
})

app.get("/linkedin", (req, res) =>{
    res.send("Aman - Linkedin.com")
})

app.get("/login", (req, res)=>{
    res.send('<h1> Welcom to the Login Page </h1>')
})

app.listen(process.env.PORT , (req, res)=>{
    console.log(`we are listening the port ${port}`)
} )