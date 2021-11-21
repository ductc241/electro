const Product = require('../models/product.model')
const productServices = {}

productServices.getAll = async (req) => {
   const currentPage = Number(req.query.page) || 1
   const productPerPage = 10
   const beforeProduct = productPerPage * (currentPage -1)

   return new Promise(async (res, rej) => {
      try {
         const data = await Product
            .find()
            .sort({_id: -1})
            .skip(beforeProduct)
            .limit(productPerPage)

         const totalProduct = await Product.countDocuments()
         res({
            data,
            paging: {
               curren_page: currentPage,
               last_page: Math.round(totalProduct/productPerPage),
               limit: productPerPage,
               total: totalProduct
            }
         })
      } catch (error) {
         rej(error)
      }
   })
}

productServices.get = async (req) => {
   const { sort, order } = req.query

   if(!sort && !order) {
      return await Product.find()
   }

   if(sort && !order) {
      console.log('here')
      return await Product.find()
   }

   switch (order) {
      case 'asc':
         return await Product.find().sort({ [sort]: 1 })
         break;
      case 'desc':
         return await Product.find().sort({ [sort]: -1 })
         break;  
      default:
         break;
   }
}

productServices.add = async (req) => {
   const data = req.body
   const product = new Product(req.body)
   return product.save()
}

productServices.update = (req) => {  
   return new Promise(async (res, rej) => {
      try {
         const productId = req.params.id
         const response = await Product.updateOne({_id: productId}, req.body)
         res(response)
      } catch (error) {
         rej(error)
      }
   })
}

productServices.delete = (req) => {  
   return new Promise(async (res, rej) => {
      try {
         const productId = req.params.id
         const response = await Product.deleteOne({_id: productId})
         if(response.deletedCount > 0){
            res({
               message: 'Xoa thanh cong'
            })
         }else{
            res({err: 'Xoa that bai'})
         }
      } catch (error) {
         rej(error)
      }
   })
}

productServices.findById = (req) => {  
   return new Promise(async (res, rej) => {
      try {
         const productId = req.params.id
         const response = await Product.findById({_id: productId})
         res(response)
      } catch (error) {
         rej(error)
      }
   })
}

productServices.findBySlug = (req) => {  
   return new Promise(async (res, rej) => {
      try {
         const response = await Product.find({slug: req.params.slug})
         res(response)
      } catch (error) {
         rej(error)
      }
   })
}


productServices.sort = (req) => {  
   return new Promise(async (res, rej) => {
      try {
         const response = 'sort result'
         res(response)
      } catch (error) {
         rej(error)
      }
   })
}


module.exports = productServices