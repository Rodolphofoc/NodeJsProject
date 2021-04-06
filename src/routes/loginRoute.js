'use strict';
const login = require('../controllers/loginController')
const express = require('express');
const router = express.Router();


router.get('/', login.get);
router.post('/', login.post);
router.put('/access:id', login.put);
// router.delete('/access:id', controller.delete);



module.exports = router;