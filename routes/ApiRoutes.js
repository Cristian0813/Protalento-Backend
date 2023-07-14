let express=require('express')
let router=express.Router()

router.get('/', (req, res)=>{
    res.json({
        Nombre:'Cristian Javier',
        Apellido: 'Arias Ordoñez'
    }) 
})

module.exports=router