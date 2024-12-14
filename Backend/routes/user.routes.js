const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const {usercontroller} = require('../controllers/user.controller')


router.post('/register', [
    body('email').isEmail().withMessage('Invalid email adress..'),
    body('fullname.firstname').isLength({min : 3}).withMessage("first name must be at least 3 charactors long"),
    body('password').isLength({min : 6}).withMessage("Password must be 6 charactors long")
], usercontroller.registerUser)

module.exports = router