const express = require('express')

const router2 = express.Router()

const myShop = require('../Controllers/shop.js')

router2.get('/', myShop.myShop)

module.exports = router2;