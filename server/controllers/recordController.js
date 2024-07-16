const { Record} = require('../models/models')
const ApiError = require('../error/ApiError')
class RecordController{
    async create(req,res){
        const {name} = req.body
        const record = await Record.create({name})
        return res.json(record)
    }
    async getAll(req,res){

    }
    async getOne(req,res){

    }
    async delete(req,res){

    }
}
module.exports = new RecordController()