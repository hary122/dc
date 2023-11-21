const express = require('express');
const { RegisterDoctor, LoginDoctor } = require('../../Controllers/doctors/userController');


const router = express.Router();


router.route('/register').post(RegisterDoctor)
router.route('/login').post(LoginDoctor)


module.exports = router