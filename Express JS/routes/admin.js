
const express = require('express')

const router = express.Router()

const addProduct = require('..//controllers/admin.js')

const readProduct = require('..//controllers/admin.js')

router.get('/add-product', addProduct.addProduct)

router.post('/product', readProduct.readProduct)

module.exports = router