const Category = require('../models/category.model')
const categoryServices = {}

categoryServices.getAll = async () => {
   return await Category.find({})
}

categoryServices.add = async (req) => {
   const category = new Category(req.body)
   return category.save()
}

categoryServices.update = (req) => {  
   return new Promise(async (res, rej) => {
      try {
         const cateName = req.params.name
         const response = await Category.updateOne({name: cateName}, req.body)
         res(response)
      } catch (error) {
         rej(error)
      }
   })
}

module.exports = categoryServices