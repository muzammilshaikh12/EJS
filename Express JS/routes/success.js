const express = require('express')

const router = express.Router()

const successPage = require('../Controllers/success.js')

router.post('/success', successPage.successPage)

module.exports = router