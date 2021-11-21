const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// router.get('', productController.get)

router.get('/', productController.getAll)
router.post('/', productController.add)

// router.get('/:slug', productController.findBySlug)

router.get('/:id', productController.findById)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)


module.exports = router;