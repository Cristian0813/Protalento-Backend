//AQUI SE TRAE LA IMPORTACIÓN DE LAS RUTAS

const express = require('express');
const app = express ();
const bodyParser = require('body-parser');
const Routes=require ('./routes');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);

app.listen(8080, ()=>{
    console.log('Server up on port 8080')
}) 


//EJERCICIO 4
/* 1. Agrega un endpoint '/api/' que responda a una petición de tipo GET con un código de estado 200 y el siguiente json:
{ 'mensaje':'hola mundo' }*/
/* app.get('/api', (req, res)=>{
    res.status(200).json({
        Mensaje: 'Hola mundo'
    });
})*/
/*Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json como el siguiente: { 'resultado': 7 }*/
/* app.get('/api/suma', (req, res)=>{
    let valor = req.query
    let resultado=parseInt(valor.valor1)+parseInt(valor.valor2)
    console.log(resultado)
    res.status(200).json({
        Resuelto: resultado
    }) 
})*/
/*Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET con el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este:
{ 'usuario': 'Edwin' }*/
/* app.get('/api/usuario', (req, res)=>{
    let user = req.query
    res.status(200).json({
        Username: user
    })
})*/