'use strict';
const controller = require('../controllers/AccessController')
const express = require('express');
const router = express.Router();


router.get('/', controller.get);
router.post('/login', controller.post);
router.put('/access:id', controller.put);
// router.delete('/access:id', controller.delete);



module.exports = router;