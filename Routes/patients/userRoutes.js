const express = require('express');
const { RegisterPatient, LoginPatient } = require('../../Controllers/patients/userController');

const router = express.Router();


router.route('/register').post(RegisterPatient)
router.route('/login').post(LoginPatient)



module.exports = router