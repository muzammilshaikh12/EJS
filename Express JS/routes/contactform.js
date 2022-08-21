const express = require('express')

const router = express.Router()

const contactForm = require('../Controllers/form.js')

router.get('/contactus', contactForm.contactForm)

module.exports = router;