const {Record} = require("../models/models");

class ConsultationController{
    async create(req,res){
        const {name} = req.body
        const consultation = await consultation.create({name})
        return res.json(consultation)
    }
    async getAll(req,res){

    }
    async delete(req,res){

    }
}
module.exports = new ConsultationController()