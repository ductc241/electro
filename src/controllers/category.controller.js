const categoryServices = require('../services/category.service');

class categoryController{
    async getAll(req, res) {
        try {
            const products = await categoryServices.getAll()
            res.json(products)
        } catch (error) {
            console.log(error)
        }
    }

    async add(req, res) {
        try {
            const response = await categoryServices.add(req)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        try {
            const response = await categoryServices.update(req)
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new categoryController;