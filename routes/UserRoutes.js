let express=require('express')
let router=express.Router()

let controller=require('../controllers')

router.use('/static', express.static('views/public'))

// PARA PASAR QUERY DATOS se USA ?dato1=7&dato2=2
router.get('/', controller.UserControllers.getUsers)
router.get('/:id', controller.UserControllers.getOneUser)
router.delete('/:id', controller.UserControllers.deleteUser)
router.put('/:id', controller.UserControllers.updateUser)
router.post('/', controller.UserControllers.createUser)



//DONDE ESTA EL SIMBOLO : ESO SE VA A REEMPLAZAR POR LO QUE TENGA LA URL Y ESO ES LO QUE LLAMAMOS params
router.get('/ejemplo/:number', controller.UserControllers.getUsers)

module.exports=router