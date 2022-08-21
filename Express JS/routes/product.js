const express= require('express')

const router= express.Router()

const myProducts = require('../Controllers/product.js')

router.get('/products',myProducts.myProducts)

module.exports = router;