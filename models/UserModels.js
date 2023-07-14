const conecction = require('../knexfile')['development']
const db = require('knex')(conecction)
//SE CREA EL MODELO DE LA BASE DE DATOS
module.exports={
    getAllUserModel:()=>{
        return db('users')
    },
    getOneUsersModel:(UserId)=>{
        return db('users').where({"id":UserId})
    },
    createUserModel:(user)=>{
        return db('users').insert(user)
    },
    updateUserModel:(UserId, toUpdate)=>{
        return db('users')
            .where({"id":UserId})
            .update(toUpdate)
    },
    deleteUserModel:(UserId)=>{
        return db('users')
            .where({"id":UserId})
            .del()
    }
}