//AQUI SE TRAE LA IMPORTACIÓN DE LAS RUTAS
const express = require('express');
const app = express ();
//BODY PARSER, NOS SIVER PARA RECIBIR DE MANERA CORRECTA LOS PARAMETROS QUE VIENEN EN EL BODY
const bodyParser = require('body-parser');

const Routes=require ('./routes');
//AQUI LICENCIAMOS EL BODY
app.use(bodyParser.urlencoded({
    extended: false
}));
//AQUI UTILISAMOS EL BODY
app.use(bodyParser.json());
//AQUI VIENEN LAS DIFERENTES RUTAS
app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);
//PRENDEMOS EL SERVIDOR
app.listen(8080, ()=>{
    console.log('Server up on port 8080')
}) 