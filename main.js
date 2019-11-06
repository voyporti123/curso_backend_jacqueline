const express = require('express')
const bodyParser = require('body-parser')
//Aplicacion 
const app = express()
//Configuración de la App
app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin','*')
     res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, x-auth-token')

     res.header('Access-Control-Expose-Headers',
     'x-auth-token')

     next()
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/jacqui', (req,res) => {res.send('Hola mi nombre es Jacqueline')})

app.get('/info', (req,res) => {res.send('Algo increible esta por venir :D')})

app.pose('/saludo', (req,res) => {
    var name = req.body.name

    res.send(`Hola ${name} un gusto en conocerte`)
})
