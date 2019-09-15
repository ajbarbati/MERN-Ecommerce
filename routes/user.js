const express = require('express')
const router = express.Router()

const {sayHi} = require('../controllers/user_c') 

router.get('/', sayHi)

module.exports = router