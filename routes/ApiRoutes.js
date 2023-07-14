//CONFIGURAR Y UTILIZAR EL ENRUTADOR EXPRRES EN UNA APP WEB
let express=require('express')
let router=express.Router()
//ES LA RUTA GET DE LA API QUE RESPONDE CON UN OBJETO JSON
router.get('/', (req, res)=>{
    res.json({
        Nombre:'Cristian Javier',
        Apellido: 'Arias Ordoñez'
    }) 
})
//TRAE EL MODULO
module.exports=router