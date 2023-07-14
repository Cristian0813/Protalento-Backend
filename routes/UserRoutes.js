//CONFIGURAR Y UTILIZAR EL ENRUTADOR EXPRRES EN UNA APP WEB
let express=require('express')
let router=express.Router()
//ES LA QUE TRAE CONTROLES
let controller=require('../controllers')

router.use('/static', express.static('views/public'))

// PARA PASAR QUERY DATOS se USA ?dato1=7&dato2=2
//GET=TRAE LAS COSAS, EL POST=CRE LAS COSAS, DELET=BORRA LAS COSAS, PUT=EDITA LAS COSAS
router.get('/', controller.UserControllers.getUsers)
router.get('/:id', controller.UserControllers.getOneUser)
router.post('/', controller.UserControllers.createUser)
router.delete('/:id', controller.UserControllers.deleteUser)
router.put('/:id', controller.UserControllers.updateUser)



//DONDE ESTA EL SIMBOLO : ESO SE VA A REEMPLAZAR POR LO QUE TENGA LA URL Y ESO ES LO QUE LLAMAMOS params
router.get('/ejemplo/:number', controller.UserControllers.getUsers)
//EXPORTA EL MODULO
module.exports=router