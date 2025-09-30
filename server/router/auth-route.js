
const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');


router.route('/').get(authController.home);
router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/checkout').post(authController.checkout)
router.route('/contact').post(authController.contact)


module.exports = router;
