const productServices = require('../services/product.service');

class productController{
    async getAll(req, res) {
        try {
            const products = await productServices.getAll(req)
            res.status(200).json(products)
        } catch (error) {
            console.log(error)
        }
    }

    async get(req, res) {
        try {
            const products = await productServices.get(req)
            res.json(products)
        } catch (error) {
            console.log(error)
        }
    }

    async add(req, res) {
        try {
            const products = await productServices.add(req)
            if(products){
                res.send({ message: 'them thanh cong' })
            }
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        try {
            const response = await productServices.update(req)
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    async delete(req, res) {
        try {
            const response = await productServices.delete(req)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async findById(req, res) {
        try {
            const response = await productServices.findById(req)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async findBySlug(req, res) {
        try {
            const response = await productServices.findBySlug(req)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async sort(req, res) {
        try {
            const response = await productServices.findBySlug(req)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new productController;