const {UserModels}=require('../models')

module.exports={
    getUsers: (req, res)=>{
        UserModels
            .getAllUserModel()
            .then(results=>res.status(201).json(results))
            .catch(err=>res.status(500).json(err))
    },
    //GET SE TREA ALGO Y LO RESUELVECON UNA PROMESA
    getOneUser: (req, res)=>{
        let {id} = req.params
        UserModels
            .getOneUsersModel(id)
            .then(results=>res.status(201).json(results))
            .catch(err=>res.status(500).json(err))
    },
    // SE EL USUARO EN MODELS
    createUser:(req, res)=>{
        const {body}= req
        UserModels
            .createUserModel(body)
            .then(results=>res.status(201).json(results))
            .catch(err=>res.status(500).json(err))
    },
    //SE 
    updateUser:(req, res)=>{
        const {body}= req
        const {id}=req.params
        UserModels
            .updateUserModel(id, body)
            .then(results=>res.status(201).json(results))
            .catch(err=>res.status(500).json(err))
    },
    deleteUser: (req, res)=>{
        let {id} = req.params
        UserModels
            .deleteUserModel(id)
            .then(results=>res.status(201).json(results))
            .catch(err=>res.status(500).json(err))
    },
    getNumbers: (req, res)=>{
        let numbers = req.params
        console.log(numbers)
        res.json({
            numbers
        })
    }
}